import Link from 'next/link'
import { CartIndicator } from './CartIndicator/CartIndicator'
import classes from './MainHeader.module.css'

export const MainHeader = () => {
  return (
    <header className={`app-width ${classes.root}`}>
      <div className={classes.root}>
        <div>
          <Link href='/' passHref>
            <a>
              <h1>Super shop</h1>
              <p>The best shop ever</p>
            </a>
          </Link>
        </div>
        <form>
          <label htmlFor='product'>Search for products</label>
          <input id='product' type='text' />
          <button type='submit'>Search</button>
        </form>
        <CartIndicator />
      </div>
    </header>
  )
}
