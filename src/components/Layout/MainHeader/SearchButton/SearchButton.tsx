import classes from './SearchButton.module.css'

import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import { SearchModal } from '../../../SearchModal/SearchModal'

export const SearchButton = () => {
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  const searchButtonClickHandler = () => {
    setSearchModalOpen(true)
  }

  const closeSearchModal = () => {
    setSearchModalOpen(false)
  }

  return (
    <>
      <button onClick={searchButtonClickHandler} className={classes.root}>
        <BsSearch style={{ verticalAlign: 'middle', fontSize: '2rem' }} />
      </button>
      {searchModalOpen && <SearchModal onClose={closeSearchModal} />}
    </>
  )
}
