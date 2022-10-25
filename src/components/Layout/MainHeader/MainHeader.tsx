import Link from 'next/link'
import { CartIndicator } from './CartIndicator/CartIndicator'
import classes from './MainHeader.module.css'
import { SearchButton } from './SearchButton/SearchButton'

export const MainHeader = () => {
  const HomepageLink = (
    <div>
      <Link href='/' passHref>
        <a>
          <h1 className={classes.title}>Super shop</h1>
          <p className={classes['lower-text']}>The best shop ever</p>
        </a>
      </Link>
    </div>
  )

  return (
    <header className={`app-width ${classes.root}`}>
      <div className={classes.root}>
        {HomepageLink}
        <SearchButton />
        <CartIndicator />
      </div>
    </header>
  )
}
