import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../../../MainProductGrid/MainProductGrid'
import { AddToCartButton } from '../../../UI/AddToCartButton/AddToCartButton'
import classes from './ResultItem.module.css'

type Props = {
  item: Product
}

export const ResultItem = ({ item }: Props) => {
  const { id, image, name, slug, price } = item

  return (
    <li className={classes.root}>
      <Link href={`/product/${slug}`}>
        <a>
          <Image width='50' height='50' src={image} alt={name} />
          <p>{name}</p>
          <p>{price}</p>
          <AddToCartButton productId={id} />
        </a>
      </Link>
    </li>
  )
}
