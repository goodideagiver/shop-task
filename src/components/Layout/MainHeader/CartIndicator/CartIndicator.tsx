import classes from './CartIndicator.module.css'

import Link from 'next/link'
import { BsCart } from 'react-icons/bs'
import { useCartIndicator } from './useCartIndicator'

const iconStyles = { verticalAlign: 'middle', fontSize: '2rem' }

export const CartIndicator = () => {
  const { count, hasItemsInCart } = useCartIndicator()

  const ItemsBadge = hasItemsInCart && (
    <span className={classes.badge}>
      <span>
        <span className={classes.count}>{count}</span>
      </span>
    </span>
  )

  return (
    <Link href='/cart' passHref>
      <a title='Shopping cart' className={`${classes.root} universal-button`}>
        {ItemsBadge}
        <BsCart style={iconStyles} />
      </a>
    </Link>
  )
}
