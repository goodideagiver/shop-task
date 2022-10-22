import { fetchFromStoreApi } from './fetchFromStoreApi'

const query = `
  query GetSingleProduct($slug: String) {
  products(slug: $slug) {
    id
    name
    description
    price
    image
  }
}
`

export const getSingleProduct = async (slug: string) => {
  const response = await fetchFromStoreApi(query, { slug })
  const data = await response.json()
  return data.data.products[0]
}
