import classes from './SearchModalHeader.module.css'

import { VscChromeClose } from 'react-icons/vsc'

type Props = {
  onClose: () => void
  inputValue: string
  inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchModalHeader = ({
  inputChangeHandler,
  inputValue,
  onClose,
}: Props) => {
  return (
    <header className={classes.root}>
      <label htmlFor='search'>Search items</label>
      <input
        id='search'
        className={classes['search-input']}
        type='text'
        placeholder='item name'
        value={inputValue}
        onChange={inputChangeHandler}
      />
      <button
        className={classes.close}
        onClick={onClose}
        aria-label='close search window'
      >
        <VscChromeClose
          style={{ verticalAlign: 'middle', fontSize: '1.5rem' }}
        />
      </button>
    </header>
  )
}
