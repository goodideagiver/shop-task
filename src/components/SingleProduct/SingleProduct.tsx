import Image from 'next/image'
import { CURRENCY } from '../../storeConfig'
import { AddToCartButton } from '../UI/AddToCartButton/AddToCartButton'
import classes from './SingleProduct.module.css'

type Props = {
  name: string
  price: number
  image: string
  description: string
  id: string
}

export const SingleProduct = ({
  name,
  price,
  image,
  description,
  id,
}: Props) => {
  return (
    <div className={`${classes.root} app-width`}>
      <div>
        <Image src={image} width='500' height='500' alt={name} />
      </div>
      <div className={classes['product-info-wrapper']}>
        <div className={classes['product-info']}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className={classes['product-actions']}>
          <p className={classes.price}>
            {CURRENCY} {price}
          </p>
          <AddToCartButton productId={id} />
        </div>
      </div>
    </div>
  )
}
