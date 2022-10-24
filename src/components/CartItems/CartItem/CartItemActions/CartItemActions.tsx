import classes from './CartItemActions.module.css'

import { TbTrashX } from 'react-icons/tb'
import { HiMinus, HiPlus } from 'react-icons/hi'

type Button = {
  onClick: () => void
  children: React.ReactNode
  label: string
}

type Props = {
  addItemHandler: () => void
  subtractItemHandler: () => void
  removeItemHandler: () => void
}

const iconStyle = { verticalAlign: 'middle', fontSize: '1.5rem' }

export const CartItemActions = ({
  addItemHandler,
  removeItemHandler,
  subtractItemHandler,
}: Props) => {
  const cartItemActionButtons: Button[] = [
    {
      onClick: addItemHandler,
      children: <HiPlus style={iconStyle} />,
      label: 'Add one item',
    },
    {
      onClick: subtractItemHandler,
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
