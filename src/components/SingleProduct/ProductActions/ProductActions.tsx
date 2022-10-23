import { CURRENCY } from '../../../storeConfig'
import { AddToCartButton } from '../../UI/AddToCartButton/AddToCartButton'
import classes from './ProductActions.module.css'

type Props = {
  productId: string
  price: number
}

export const ProductActions = ({ price, productId }: Props) => {
  return (
    <div className={classes.root}>
      <p className={classes.price}>
        {CURRENCY} {price}
      </p>
      <AddToCartButton productId={productId} />
    </div>
  )
}
