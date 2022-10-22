import classes from './AddToCartButton.module.css'

import { BsCartPlus } from 'react-icons/bs'
import { MouseEvent } from 'react'

type Props = {
  productId: string
}

export const AddToCartButton = ({ productId }: Props) => {
  const cartButtonClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    alert(`Added to cart ${productId} NOT IMPLEMENTED YET`)
  }

  return (
    <button onClick={cartButtonClickHandler} className={classes['cart-btn']}>
      <span>
        <BsCartPlus />
      </span>
    </button>
  )
}
