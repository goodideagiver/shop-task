import type { NextPage } from 'next'
import { MainProductGrid } from '../src/components/MainProductGrid/MainProductGrid'
import { fetchFromStoreApi } from './api/fetchFromStoreApi'

type Product = {
  name: string
  price: number
  id: string
  image: string
  slug: string
}

type Props = {
  products: Product[]
}

const Home: NextPage<Props> = (props) => {
  return <MainProductGrid products={props.products} />
}

export default Home

export async function getStaticProps() {
  const res = await fetchFromStoreApi(`
  query {
    products {
      name
      price
      slug
      image
      id
    }
  }
`)

  const productsData = await res.json()
  const products = productsData.data.products

  return {
    props: {
      products,
    },
  }
}
