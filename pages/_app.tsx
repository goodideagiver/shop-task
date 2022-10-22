import { Layout } from '../src/components/Layout/Layout'

import '../styles/globals.css'

type Props = {
  Component: any
  pageProps: any
}

const MyApp = ({ Component, pageProps }: Props) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
