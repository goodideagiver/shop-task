import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useDebounce } from '../../hooks/useDebounce'
import { useProductsStore } from '../../store/products-store'
import { Product } from '../MainProductGrid/MainProductGrid'
import classes from './SearchModal.module.css'
import { SearchResults } from './SearchResults/SearchResults'
import { useIsBrowser } from './useIsBrowser'

type Props = {
  onClose: () => void
}

export const SearchModal = ({ onClose }: Props) => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const [foundItems, setFoundItems] = useState<Product[]>([])
  const [searchHasNoResults, setSearchHasNoResults] = useState(false)
  const isBrowser = useIsBrowser()

  const itemName = useDebounce(searchInputValue)

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value)
  }

  const products = useProductsStore((state) => state.products)

  useEffect(() => {
    if (itemName.trim().length === 0) {
      if (foundItems.length > 0) setFoundItems([])
      return
    }
    const productsWithMatchingName = products.filter((product) =>
      product.name.toLowerCase().includes(itemName.toLowerCase())
    )
    setFoundItems(productsWithMatchingName)
  }, [itemName, products, foundItems.length])

  if (!isBrowser) return null

  return createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.root}>
        <div className={classes.content}>
          <header>
            <label htmlFor='search'>Search items</label>
            <input
              id='search'
              className={classes['search-input']}
              type='text'
              placeholder='item name'
              value={searchInputValue}
              onChange={searchInputHandler}
            />
            <button className={classes.close} onClick={onClose}>
              Close modal
            </button>
          </header>
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
