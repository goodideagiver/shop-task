import { useEffect, useState } from 'react'
import { fetchFromStoreApi } from '../../../pages/api/fetchFromStoreApi'
import { useCartStore } from '../../store/cart-items'
import { CURRENCY } from '../../storeConfig'
import { CartItem } from './CartItem/CartItem'
import classes from './CartItems.module.css'

import { BarLoader } from 'react-spinners'
import { useDebounce } from '../../hooks/useDebounce'

type Item = {
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
}

export const CartItems = () => {
  const [itemsState, setItemsState] = useState<ItemsState>({
    items: [],
    total: 0,
    count: 0,
    loading: false,
  })
  const { count, items, clearCart } = useCartStore((state) => state)
  const { count: debouncedCount, items: debouncedItems } = useDebounce(
    { count, items },
    500
  )

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

  const ItemsList =
    cartHasItemsToDisplay &&
    itemsState.items.map((item) => {
      const total = item.price * item.quantity
      return (
        <CartItem
          key={item.id}
          id={item.id}
          img={item.image}
          price={Number(item.price)}
          quantity={item.quantity}
          slug={item.slug}
          title={item.name}
          total={Number(total)}
        />
      )
    })

  return (
    <div className={`${classes.root} app-width`}>
      {cartHasItemsToDisplay && <ul className={classes.list}>{ItemsList}</ul>}
      <BarLoader
        color='white'
        width={'200px'}
        height={20}
        cssOverride={{ margin: '0 auto' }}
        loading={itemsState.loading}
      />
      {!cartHasItemsToDisplay && !itemsState.loading && (
        <div className={classes.empty}>
          <h2>Your cart is empty</h2>
          <p>
            You have no items in your cart. To add one or more items, click the
            "Add to cart" button next to the item.
          </p>
        </div>
      )}
      {cartHasItemsToDisplay && (
        <div className={classes.summary}>
          <p className={classes.total}>Items in cart: {count}</p>
          <p className={classes.total}>
            Total: {CURRENCY} {cartTotal}
          </p>
          <button className={classes['buy-button']}>Buy</button>
          <button onClick={clearCart} className={classes['buy-button']}>
            Reset
          </button>
        </div>
      )}
    </div>
  )
}
