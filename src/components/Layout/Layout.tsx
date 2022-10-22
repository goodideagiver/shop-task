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
      <MainHeader />
      {children}
      <Footer />
    </>
  )
}
