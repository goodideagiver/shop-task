import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Product } from '../components/MainProductGrid/MainProductGrid'

type Item = Product

type ProductsState = {
  products: Item[]
  setProducts: (products: Item[]) => void
}

export const useProductsStore = create<ProductsState>()(
  devtools(
    persist(
      (set) => ({
        setProducts: (products) => set({ products }),
        products: [],
      }),
      {
        name: 'products-store',
      }
    )
  )
)
