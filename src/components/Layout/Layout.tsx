import Head from 'next/head'
import { ReactNode } from 'react'
import { Footer } from './Footer/Footer'
import classes from './Layout.module.css'
import { MainHeader } from './MainHeader/MainHeader'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Super shop - best shop ever</title>
      </Head>
      <div className={classes.root}>
        <MainHeader />
        <main className={classes.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
