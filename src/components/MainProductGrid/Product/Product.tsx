import Link from 'next/link'
import classes from './Product.module.css'

import { BsCartPlus } from 'react-icons/bs'
import { MouseEvent } from 'react'
import Image from 'next/image'
import { CURRENCY } from '../../../storeConfig'

type Props = {
  name: string
  price: number
  slug: string
  image: string
}

export const Product = ({ image, name, price, slug }: Props) => {
  const cartButtonClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    alert('Added to cart NOT IMPLEMENTED YET')
  }

  const itemLink = `/product/${slug}`

  return (
    <Link href={itemLink} passHref>
      <a className={classes.root}>
        <h3>{name}</h3>
        <Image src={image} alt={name} width='250`' height='250`' />
        <div className={classes['bottom-section']}>
          <p className={classes.price}>
            {CURRENCY} {price}
          </p>
          <button
            onClick={cartButtonClickHandler}
            className={classes['cart-btn']}
          >
            <span>
              <BsCartPlus />
            </span>
          </button>
        </div>
      </a>
    </Link>
  )
}
