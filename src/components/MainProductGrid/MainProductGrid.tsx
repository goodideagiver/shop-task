import Image from 'next/image'
import classes from './MainProductGrid.module.css'
import { Product } from './Product/Product'

type Product = {
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
  if (!products || products.length === 0) return <p>No products found</p>

  return (
    <div className={`${classes.root} app-width`}>
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
