import classes from './CartIndicator.module.css'

import { BsCart } from 'react-icons/bs'

const ITEMS_COUNT = 5

export const CartIndicator = () => {
  const cartButtonHandler = () => {
    alert('Cart button clicked')
  }

  const ItemsBadge = ITEMS_COUNT > 0 && (
    <span className={classes.badge}>
      <span>{ITEMS_COUNT}</span>
    </span>
  )

  return (
    <button onClick={cartButtonHandler} className={classes.root}>
      {ItemsBadge}
      <BsCart style={{ verticalAlign: 'middle', fontSize: '2rem' }} />
    </button>
  )
}
