import classes from './CartItemActions.module.css'

type Button = {
  onClick: () => void
  children: React.ReactNode
  label: string
}

type Props = {
  buttons: Button[]
}

export const CartItemActions = ({ buttons }: Props) => {
  return (
    <>
      {buttons.map((button) => (
        <button
          key={button.label}
          className={classes.button}
          onClick={button.onClick}
          aria-label={button.label}
        >
          {button.children}
        </button>
      ))}
    </>
  )
}
