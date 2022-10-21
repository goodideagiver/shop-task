import classes from './MainHeader.module.css'

export const MainHeader = () => {
  return (
    <header>
      <h1>Super shop</h1>
      <form>
        <label htmlFor='product'>Search for products</label>
        <input id='product' type='text' />
        <button type='submit'>Search</button>
      </form>
    </header>
  )
}
