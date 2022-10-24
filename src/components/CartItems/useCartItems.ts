import { useDebounce } from '../../hooks/useDebounce'
import { useCartStore } from '../../store/cart-items'
import { useState, useEffect } from 'react'
import { fetchFromStoreApi } from '../../../pages/api/fetchFromStoreApi'

export type Item = {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  slug: string
}

type ItemsState = {
  loading: boolean
  count: number
  total: number
  items: Item[]
  waitingForDebounce: boolean
}

export const useCartItems = () => {
  const [itemsState, setItemsState] = useState<ItemsState>({
    items: [],
    total: 0,
    count: 0,
    loading: false,
    waitingForDebounce: false,
  })
  const { count, items, clearCart } = useCartStore((state) => state)
  const { count: debouncedCount, items: debouncedItems } = useDebounce(
    { count, items },
    500
  )

  useEffect(() => {
    if (debouncedCount !== count) {
      setItemsState((prevState) => ({
        ...prevState,
        waitingForDebounce: true,
      }))
    } else {
      setItemsState((prevState) => ({
        ...prevState,
        waitingForDebounce: false,
      }))
    }
  }, [debouncedCount, count])

  useEffect(() => {
    if (debouncedCount === 0) return

    const getItems = async () => {
      setItemsState((prevState) => ({ ...prevState, loading: true }))

      const resp = await fetchFromStoreApi(`
        query {
          products {
            id
            name
            price
            slug
            image
          }
        }
      `)

      const data = await resp.json()
      const products = data.data.products
      const itemsInCart = products.filter((product) => {
        return debouncedItems.find((item) => item.id === product.id)
      })
      const itemsWithCount = itemsInCart.map((item) => {
        const count = debouncedItems.find((i) => i.id === item.id)?.quantity
        return { ...item, quantity: count }
      })

      setItemsState((prevState) => ({
        ...prevState,
        loading: false,
        items: itemsWithCount,
      }))
    }

    getItems()
  }, [debouncedCount, debouncedItems])

  const cartHasItemsToDisplay = count > 0 && !itemsState.loading

  const cartTotal =
    cartHasItemsToDisplay &&
    itemsState.items
      .reduce((acc, item) => {
        return acc + item.price * item.quantity
      }, 0)
      .toFixed(2)

  return {
    itemsState,
    cartHasItemsToDisplay,
    cartTotal,
    clearCart,
    itemsInCart: count,
  }
}
