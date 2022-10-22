import type { NextPage } from 'next'
import { MainProductGrid } from '../src/components/MainProductGrid/MainProductGrid'
import { fetchFromStoreApi } from './api/fetchFromStoreApi'

const Home: NextPage = (props) => {
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
