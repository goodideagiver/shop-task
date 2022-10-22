import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Item = {
  id: string
  quantity: number
}

type CartState = {
  items: Item[]
  addOne: (id: string) => void
  removeItem: (id: string) => void
  clearCart: () => void
  removeOne: (id: string) => void
  count: number
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        addOne: (id) =>
          set((state) => {
            const items = [...state.items]
            const index = items.findIndex((i) => i.id === id)
            if (index !== -1) {
              items[index].quantity += 1
            } else {
              items.push({ id, quantity: 1 })
            }
            const count = items.reduce((acc, item) => acc + item.quantity, 0)
            return {
              count,
              items,
            }
          }),
        removeItem: (id) =>
          set((state) => {
            const items = [...state.items]
            const index = items.findIndex((i) => i.id === id)
            if (index !== -1) {
              items.splice(index, 1)
            }
            const count = items.reduce((acc, item) => acc + item.quantity, 0)
            return {
              count,
              items,
            }
          }),
        removeOne: (id) =>
          set((state) => {
            const items = [...state.items]
            const index = items.findIndex((i) => i.id === id)
            if (index !== -1) {
              if (items[index].quantity > 1) {
                items[index].quantity -= 1
              } else {
                items.splice(index, 1)
              }
            }
            const count = items.reduce((acc, item) => acc + item.quantity, 0)
            return {
              count,
              items,
            }
          }),
        clearCart: () =>
          set(() => ({
            items: [],
            count: 0,
          })),
        items: [],
        total: 0,
        count: 0,
      }),
      {
        name: 'cart-store',
      }
    )
  )
)
