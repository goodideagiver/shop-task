import { useCartStore } from '../../../store/cart-items'

export const useCartItem = (cartItemId: string) => {
  const {
    removeItem: removeItemById,
    addOne: addOneItemById,
    removeOne: removeOneItemById,
  } = useCartStore((state) => state)

  const removeItemHandler = () => {
    removeItemById(cartItemId)
  }

  const minusOneItemHandler = () => {
    removeOneItemById(cartItemId)
  }

  const plusOneItemHandler = () => {
    addOneItemById(cartItemId)
  }

  return {
    removeItemHandler,
    minusOneItemHandler,
    plusOneItemHandler,
  }
}
