import Image from 'next/image'
import Link from 'next/link'
import { CURRENCY } from '../../../storeConfig'
import classes from './CartItem.module.css'

import { useCartItem } from './useCartItem'
import { CartItemActions } from './CartItemActions/CartItemActions'

export type Props = {
  img: string
  title: string
  quantity: number
  total: number
  price: number
  id: string
  slug: string
}

export const CartItem = ({
  id,
  img,
  price,
  quantity,
  slug,
  title,
  total,
}: Props) => {
  const { minusOneItemHandler, plusOneItemHandler, removeItemHandler } =
    useCartItem(id)

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
        <p>Quantity: {quantity}</p>
        <p>
          Total: {CURRENCY} {total.toFixed(2)}
        </p>
        <CartItemActions
          addItemHandler={plusOneItemHandler}
          subtractItemHandler={minusOneItemHandler}
          removeItemHandler={removeItemHandler}
        />
      </div>
    </li>
  )
}
