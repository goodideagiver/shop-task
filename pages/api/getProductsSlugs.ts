import { fetchFromStoreApi } from './fetchFromStoreApi'

const query = `
  query {
    products {
      slug
    }
  }
`

export const getProductsSlugs = async () => {
  const data = await fetchFromStoreApi(query)
  const prodData = await data.json()
  return prodData.data.products.map((product: { slug: string }) => product.slug)
}
