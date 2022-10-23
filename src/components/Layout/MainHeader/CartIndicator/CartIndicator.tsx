import classes from './CartIndicator.module.css'

import { BsCart } from 'react-icons/bs'
import Link from 'next/link'
import { useCartIndicator } from './useCartIndicator'

const iconStyles = { verticalAlign: 'middle', fontSize: '2rem' }

export const CartIndicator = () => {
  const { count, hasItemsInCart } = useCartIndicator()

  const ItemsBadge = hasItemsInCart && (
    <span className={classes.badge}>
      <span>{count}</span>
    </span>
  )

  return (
    <Link href='/cart' passHref>
      <a className={classes.root}>
        {ItemsBadge}
        <BsCart style={iconStyles} />
      </a>
    </Link>
  )
}
