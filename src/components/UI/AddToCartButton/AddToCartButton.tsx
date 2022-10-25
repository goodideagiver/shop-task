import classes from './AddToCartButton.module.css'

import { MouseEvent } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { useCartStore } from '../../../store/cart-items'

type Props = {
  productId: string
}

export const AddToCartButton = ({ productId }: Props) => {
  const addItemToCartStore = useCartStore((state) => state.addOne)

  const cartButtonClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    addItemToCartStore(productId)
  }

  return (
    <button
      title='Add to cart'
      onClick={cartButtonClickHandler}
      className={classes['cart-btn']}
    >
      <span>
        <BsCartPlus />
      </span>
    </button>
  )
}
