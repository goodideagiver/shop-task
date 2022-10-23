import { SingleProduct } from '../../src/components/SingleProduct/SingleProduct'
import { getProductsSlugs } from '../api/getProductsSlugs'
import { getSingleProduct } from '../api/getSingleProduct'

type Product = {
  name: string
  price: number
  id: string
  image: string
  description: string
}

type Props = {
  product: Product
}

const Product = ({ product }: Props) => {
  const { name, price, image, description, id } = product

  return (
    <SingleProduct
      description={description}
      image={image}
      name={name}
      price={price}
      id={id}
    />
  )
}
export default Product

export const getStaticPaths = async () => {
  const productSlugs = await getProductsSlugs()

  return {
    paths: productSlugs.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const { slug } = params
  const product = await getSingleProduct(slug)

  return {
    props: {
      product,
    },
  }
}
