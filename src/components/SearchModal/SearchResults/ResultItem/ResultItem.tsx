import Image from 'next/image'
import Link from 'next/link'
import { CURRENCY } from '../../../../storeConfig'
import { Product } from '../../../MainProductGrid/MainProductGrid'
import { AddToCartButton } from '../../../UI/AddToCartButton/AddToCartButton'
import classes from './ResultItem.module.css'

type Props = {
  item: Product
}

export const ResultItem = ({ item }: Props) => {
  const { id, image, name, slug, price } = item

  const ItemInfo = (
    <>
      <p>{name}</p>
      <p>
        {CURRENCY} {Number(price).toFixed(2)}
      </p>
    </>
  )

  const productPageLink = `/product/${slug}`

  return (
    <li className={classes.root}>
      <Link href={productPageLink}>
        <a className={classes.link}>
          <Image width='50' height='50' src={image} alt={name} />
          {ItemInfo}
          <AddToCartButton productId={id} />
        </a>
      </Link>
    </li>
  )
}
