import { TbMoodEmpty } from 'react-icons/tb'
import { NORMAL_ICON_SIZE } from '../../../storeConfig'
import classes from './EmptyCartMessage.module.css'

export const EmptyCartMessage = () => {
  return (
    <div className={classes.root}>
      <TbMoodEmpty
        style={{ ...NORMAL_ICON_SIZE, fontSize: '5rem' }}
        aria-label='sad face'
      />
      <h2>Your cart is empty</h2>
      <p>
        You have no items in your cart. To add one or more items, click the
        {` "Add to cart" `} button next to the item.
      </p>
    </div>
  )
}
