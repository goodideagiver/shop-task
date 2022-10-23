import Link from 'next/link'
import classes from './Product.module.css'

import { BsCartPlus } from 'react-icons/bs'
import { MouseEvent } from 'react'
import Image from 'next/image'
import { CURRENCY } from '../../../storeConfig'
import { AddToCartButton } from '../../UI/AddToCartButton/AddToCartButton'

type Props = {
  name: string
  price: number
  slug: string
  image: string
  id: string
}

export const Product = ({ image, name, price, slug, id }: Props) => {
  const itemLink = `/product/${slug}`

  const ProductInfo = (
    <div>
      <h3 className={classes.title}>{name}</h3>
      <p className={classes.price}>
        {CURRENCY} {price}
      </p>
    </div>
  )

  return (
    <Link href={itemLink}>
      <a className={classes.root}>
        <Image src={image} alt={name} width='250`' height='250`' />
        <div className={classes['bottom-section']}>
          {ProductInfo}
          <AddToCartButton productId={id} />
        </div>
      </a>
    </Link>
  )
}
