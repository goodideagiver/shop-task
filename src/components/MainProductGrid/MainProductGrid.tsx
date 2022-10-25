import classes from './MainProductGrid.module.css'
import { Product } from './Product/Product'

import { useProductsStore } from '../../store/products-store'

export type Product = {
  name: string
  price: number
  slug: string
  image: string
  id: string
}

type Props = {
  products: Product[]
}

export const MainProductGrid = ({ products }: Props) => {
  const { setProducts, products: productsStore } = useProductsStore(
    (state) => state
  )

  if (!products || products.length === 0) return <p>No products found</p>

  if (productsStore.length === 0) setProducts(products)

  return (
    <div className={`${classes.root} app-width`}>
      <h2 className='sr-only'>All products</h2>
      {products.map((product) => (
        <Product
          key={product.slug}
          image={product.image}
          name={product.name}
          price={product.price}
          slug={product.slug}
          id={product.id}
        />
      ))}
    </div>
  )
}
