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
      <div className={classes.root}>
        <MainHeader />
        <main className={classes.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
