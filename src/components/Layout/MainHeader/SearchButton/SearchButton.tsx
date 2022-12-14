import classes from './SearchButton.module.css'

import { BsSearch } from 'react-icons/bs'
import { SearchModal } from '../../../SearchModal/SearchModal'
import { useSearchButton } from './useSearchButton'

export const SearchButton = () => {
  const { closeSearchModal, searchButtonClickHandler, searchModalOpen } =
    useSearchButton()

  return (
    <>
      <button
        title='Search products'
        onClick={searchButtonClickHandler}
        className={`${classes.root} universal-button`}
      >
        <BsSearch style={{ verticalAlign: 'middle', fontSize: '2rem' }} />
      </button>
      {searchModalOpen && <SearchModal onClose={closeSearchModal} />}
    </>
  )
}
