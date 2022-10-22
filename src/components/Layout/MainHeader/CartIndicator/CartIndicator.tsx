import classes from './CartIndicator.module.css'

import { BsCart } from 'react-icons/bs'
import Link from 'next/link'
import { useCartStore } from '../../../../store/cart-items'

export const CartIndicator = () => {
  const count = useCartStore((state) => state.count)

  const ItemsBadge = count > 0 && (
    <span className={classes.badge}>
      <span>{count}</span>
    </span>
  )

  return (
    <Link href='/cart' passHref>
      <a className={classes.root}>
        {ItemsBadge}
        <BsCart style={{ verticalAlign: 'middle', fontSize: '2rem' }} />
      </a>
    </Link>
  )
}
