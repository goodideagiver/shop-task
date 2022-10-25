import Head from 'next/head'
import { CartItems } from '../../src/components/CartItems/CartItems'

const Cart = () => {
  return (
    <>
      <Head>
        <title>Super shop - cart</title>
      </Head>
      <CartItems />
    </>
  )
}

export default Cart
