import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import classes from './SearchModal.module.css'
import { useIsBrowser } from './useIsBrowser'

type Props = {
  onClose: () => void
}

export const SearchModal = ({ onClose }: Props) => {
  const isBrowser = useIsBrowser()

  if (!isBrowser) return null

  return createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.root}>
        <div className={classes.content}>
          <header>
            <label for='search'>Search items</label>
            <input
              id='search'
              className={classes['search-input']}
              type='text'
              placeholder='item name'
            />
            <button className={classes.close} onClick={onClose}>
              Close modal
            </button>
          </header>
        </div>
      </div>
    </>,
    document.body
  )
}
