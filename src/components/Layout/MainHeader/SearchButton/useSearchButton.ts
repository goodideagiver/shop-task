import { useState } from 'react'

export const useSearchButton = () => {
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  const searchButtonClickHandler = () => {
    setSearchModalOpen(true)
  }

  const closeSearchModal = () => {
    setSearchModalOpen(false)
  }

  return {
    searchModalOpen,
    searchButtonClickHandler,
    closeSearchModal,
  }
}
