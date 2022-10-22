import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useDebounce } from '../../hooks/useDebounce'
import { useProductsStore } from '../../store/products-store'
import { Product } from '../MainProductGrid/MainProductGrid'
import classes from './SearchModal.module.css'
import { useIsBrowser } from './useIsBrowser'

type Props = {
  onClose: () => void
}

export const SearchModal = ({ onClose }: Props) => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const [foundItems, setFoundItems] = useState<Product[]>([])
  const isBrowser = useIsBrowser()

  const itemName = useDebounce(searchInputValue)

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value)
  }

  const products = useProductsStore((state) => state.products)

  useEffect(() => {
    if (itemName.trim().length === 0) {
      setFoundItems([])
      return
    }
    const productsWithMatchingName = products.filter((product) =>
      product.name.toLowerCase().includes(itemName.toLowerCase())
    )
    setFoundItems(productsWithMatchingName)
  }, [itemName, products])

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
          <main>
            {itemName.trim().length === 0 && (
              <div className={classes['no-items']}>
                <p>Type anything in search field to find items</p>
              </div>
            )}
            {!!foundItems.length &&
              foundItems.map((item) => <p key={item.id}>{item.name}</p>)}
          </main>
        </div>
      </div>
    </>,
    document.body
  )
}
