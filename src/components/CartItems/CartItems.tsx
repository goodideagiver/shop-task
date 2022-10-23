import { CURRENCY } from '../../storeConfig'
import { CartItem } from './CartItem/CartItem'
import classes from './CartItems.module.css'

import { BarLoader } from 'react-spinners'
import { EmptyCartMessage } from './EmptyCartMessage/EmptyCartMessage'
import { useCartItems } from './useCartItems'

export const CartItems = () => {
  const {
    cartHasItemsToDisplay,
    cartTotal,
    clearCart,
    itemsState,
    itemsInCart,
  } = useCartItems()

  const ItemsList = cartHasItemsToDisplay && (
    <ul className={classes.list}>
      {itemsState.items.map((item) => {
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
      })}
    </ul>
  )

  return (
    <div className={`${classes.root} app-width`}>
      {ItemsList}
      {itemsState.loading && (
        <p className={classes.updating}>Updating item prices</p>
      )}
      <BarLoader
        color='white'
        width={'200px'}
        height={20}
        cssOverride={{ margin: '0 auto' }}
        loading={itemsState.loading}
      />
      {!cartHasItemsToDisplay && !itemsState.loading && <EmptyCartMessage />}
      {cartHasItemsToDisplay && (
        <div className={classes.summary}>
          <p className={classes.total}>Items in cart: {itemsInCart}</p>
          <p className={classes.total}>
            {!itemsState.waitingForDebounce
              ? `Total: ${CURRENCY} ${cartTotal}`
              : 'Updating...'}
          </p>
          <button
            title='This button will never work'
            onClick={() => alert('This button will never work')}
            className={classes['buy-button']}
          >
            Buy
          </button>
          <button
            title='Remove all items from cart'
            onClick={clearCart}
            className={classes['buy-button']}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  )
}
