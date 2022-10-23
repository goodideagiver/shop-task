import classes from './AddToCartButton.module.css'

import { BsCartPlus } from 'react-icons/bs'
import { MouseEvent } from 'react'
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
    <button onClick={cartButtonClickHandler} className={classes['cart-btn']}>
      <span>
        <BsCartPlus />
      </span>
    </button>
  )
}
