import Image from 'next/image'
import Link from 'next/link'
import { CURRENCY } from '../../../storeConfig'
import classes from './CartItem.module.css'

import { TbTrashX } from 'react-icons/tb'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { useCartStore } from '../../../store/cart-items'

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
  const {
    removeItem: removeItemById,
    addOne: addOneItemById,
    removeOne: removeOneItemById,
  } = useCartStore((state) => state)

  const removeItemHandler = () => {
    removeItemById(id)
  }

  const minusOneItemHandler = () => {
    removeOneItemById(id)
  }

  const plusOneItemHandler = () => {
    addOneItemById(id)
  }

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
        <button onClick={plusOneItemHandler} className={classes.button}>
          <HiPlus style={{ verticalAlign: 'middle', fontSize: '1.5rem' }} />
        </button>
        <button onClick={minusOneItemHandler} className={classes.button}>
          <HiMinus style={{ verticalAlign: 'middle', fontSize: '1.5rem' }} />
        </button>
        <button onClick={removeItemHandler} className={classes.button}>
          <TbTrashX style={{ verticalAlign: 'middle', fontSize: '1.5rem' }} />
        </button>
      </div>
    </li>
  )
}
