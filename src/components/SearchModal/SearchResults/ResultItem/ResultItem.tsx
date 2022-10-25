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
      <div className={classes.actions}>
        <p>
          {CURRENCY} {Number(price).toFixed(2)}
        </p>
        <AddToCartButton productId={id} />
      </div>
    </>
  )

  const productPageLink = `/product/${slug}`

  return (
    <li className={classes.root}>
      <Link href={productPageLink}>
        <a className={classes.link}>
          <div>
            <Image width='80' height='80' src={image} alt={name} />
          </div>
          {ItemInfo}
        </a>
      </Link>
    </li>
  )
}
