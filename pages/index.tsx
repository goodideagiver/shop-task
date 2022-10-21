import type { NextPage } from 'next'
import { useEffect } from 'react'
import { MainHeader } from '../src/components/MainHeader/MainHeader'
import { MainProductGrid } from '../src/components/MainProductGrid/MainProductGrid'
import { fetchFromStoreApi } from './api/fetchFromStoreApi'

const Home: NextPage = (props) => {
  return (
    <div>
      <MainHeader />
      <MainProductGrid products={props.products} />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const res = await fetchFromStoreApi(`
  query {
    products{
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
