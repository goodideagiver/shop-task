import { useRouter } from 'next/router'
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
  const router = useRouter()
  const { slug } = router.query

  const { name, price, image, description } = product

  return (
    <SingleProduct
      description={description}
      image={image}
      name={name}
      price={price}
    />
  )
}
export default Product

export const getStaticPaths = async () => {
  const productSlugs = await getProductsSlugs()

  return {
    paths: productSlugs.map((slug) => ({ params: { slug } })),
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
