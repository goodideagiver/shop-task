import { useDebounce } from '../../hooks/useDebounce'
import { useProductsStore } from '../../store/products-store'
import { useEffect, useState } from 'react'
import { Product } from '../MainProductGrid/MainProductGrid'

export const useSearchModal = () => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const [foundItems, setFoundItems] = useState<Product[]>([])

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

  return {
    searchInputValue,
    searchInputHandler,
    foundItems,
  }
}
