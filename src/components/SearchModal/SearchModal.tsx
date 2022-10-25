import { createPortal } from 'react-dom'
import { useKeyPress } from '../../hooks/useKeyPress'
import { useOnRouteChange } from '../../hooks/useOnRouteChange'
import classes from './SearchModal.module.css'
import { SearchModalHeader } from './SearchModalHeader/SearchModalHeader'
import { SearchResults } from './SearchResults/SearchResults'
import { useIsBrowser } from './useIsBrowser'
import { useSearchModal } from './useSearchModal'

type Props = {
  onClose: () => void
}

export const SearchModal = ({ onClose }: Props) => {
  const { foundItems, searchInputHandler, searchInputValue } = useSearchModal()

  const isBrowser = useIsBrowser()

  useKeyPress('Escape', onClose)
  useOnRouteChange(onClose)

  if (!isBrowser) return null

  return createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.root}>
        <div className={classes.content}>
          <SearchModalHeader
            inputChangeHandler={searchInputHandler}
            inputValue={searchInputValue}
            onClose={onClose}
          />
          <SearchResults
            foundItems={foundItems}
            hasNoSearchInput={searchInputValue === ''}
          />
        </div>
      </div>
    </>,
    document.body
  )
}
