import Image from 'next/image'
import { CURRENCY } from '../../storeConfig'
import { AddToCartButton } from '../UI/AddToCartButton/AddToCartButton'
import { ProductActions } from './ProductActions/ProductActions'
import { ProductInformation } from './ProductInformation/ProductInformation'
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
  const ProductImage = (
    <div>
      <Image src={image} width='1000' height='1000' alt={name} />
    </div>
  )

  return (
    <div className={`${classes.root} app-width`}>
      {ProductImage}
      <div className={classes['product-info-wrapper']}>
        <ProductInformation description={description} name={name} />
        <ProductActions price={price} productId={id} />
      </div>
    </div>
  )
}
