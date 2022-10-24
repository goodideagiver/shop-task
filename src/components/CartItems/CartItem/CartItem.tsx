import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '../../../store/cart-items'
import { CURRENCY } from '../../../storeConfig'
import classes from './CartItem.module.css'

import { CartItemActions } from './CartItemActions/CartItemActions'

export type Props = {
  img: string
  title: string
  total: number
  price: number
  id: string
  slug: string
}

export const CartItem = ({ id, img, price, slug, title, total }: Props) => {
  const itemsInCart = useCartStore((state) => state.items)
  const currItemQuantity = itemsInCart.find((item) => item.id === id)?.quantity

  return (
    <li className={classes.root}>
      <Link href={`product/${slug}`}>
        <a className={classes.info} title='Go to item page'>
          <div className={classes['info-inner']}>
            <Image
              className={classes.image}
              src={img}
              width='100'
              height='100'
              alt={title}
            />
            <h2 className={classes['item-title']}>{title}</h2>
          </div>
        </a>
      </Link>
      <div className={classes.actions}>
        <p>Quantity: {currItemQuantity}</p>
        <p>
          Total: {CURRENCY} {total.toFixed(2)}
        </p>
        <CartItemActions itemID={id} />
      </div>
    </li>
  )
}
