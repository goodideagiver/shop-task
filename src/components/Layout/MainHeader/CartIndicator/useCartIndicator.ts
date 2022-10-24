import { useCartStore } from '../../../../store/cart-items'

export const useCartIndicator = () => {
  const count = useCartStore((state) => state.count)

  const hasItemsInCart = count > 0

  return {
    hasItemsInCart,
    count,
  }
}
