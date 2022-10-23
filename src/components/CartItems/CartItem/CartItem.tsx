import Image from 'next/image'
import Link from 'next/link'
import { CURRENCY } from '../../../storeConfig'
import classes from './CartItem.module.css'

import { TbTrashX } from 'react-icons/tb'
import { HiMinus, HiPlus } from 'react-icons/hi'
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

const iconStyle = { verticalAlign: 'middle', fontSize: '1.5rem' }

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

  const cartItemActionButtons = [
    {
      onClick: plusOneItemHandler,
      children: <HiPlus style={iconStyle} />,
      label: 'Add one item',
    },
    {
      onClick: minusOneItemHandler,
      children: <HiMinus style={iconStyle} />,
      label: 'Remove one item',
    },
    {
      onClick: removeItemHandler,
      children: <TbTrashX style={iconStyle} />,
      label: 'Remove item',
    },
  ]

  return (
    <li className={classes.root}>
      <Link href={`product/${slug}`}>
        <a className={classes.info}>
          <Image
            className={classes.image}
            src={img}
            width='100'
            height='100'
            alt={title}
          />
          <h2>{title}</h2>
        </a>
      </Link>
      <div className={classes.actions}>
        <p>Quantity: {quantity}</p>
        <p>
          Total: {CURRENCY} {total.toFixed(2)}
        </p>
        <CartItemActions buttons={cartItemActionButtons} />
      </div>
    </li>
  )
}
