import Link from 'next/link'
import classes from './Product.module.css'

import { BsCartPlus } from 'react-icons/bs'

type Props = {
  name: string
  price: number
  slug: string
  image: string
}

export const Product = ({ image, name, price, slug }: Props) => {
  return (
    <Link href={slug || 'placeholder'} passHref>
      <a className={classes.root}>
        <h3>{name}</h3>
        <p>{price}</p>
        <button>
          <span>
            <BsCartPlus />
          </span>
        </button>
      </a>
    </Link>
  )
}
