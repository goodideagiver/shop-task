import classes from './CartItemActions.module.css'

import { HiMinus, HiPlus } from 'react-icons/hi'
import { TbTrashX } from 'react-icons/tb'
import { useCartItem } from '../useCartItem'

type Button = {
  onClick: () => void
  children: React.ReactNode
  label: string
}

type Props = {
  itemID: string
}

const iconStyle = { verticalAlign: 'middle', fontSize: '1.5rem' }

export const CartItemActions = ({ itemID }: Props) => {
  const { minusOneItemHandler, plusOneItemHandler, removeItemHandler } =
    useCartItem(itemID)

  const cartItemActionButtons: Button[] = [
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
    <div className={classes.root}>
      {cartItemActionButtons.map((button) => (
        <button
          key={button.label}
          className={classes.button}
          onClick={button.onClick}
          aria-label={button.label}
        >
          {button.children}
        </button>
      ))}
    </div>
  )
}
