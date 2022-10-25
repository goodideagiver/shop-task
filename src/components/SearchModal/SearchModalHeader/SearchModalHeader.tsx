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
      <label className='sr-only' htmlFor='search'>
        Search items
      </label>
      <input
        autoFocus
        id='search'
        className={classes['search-input']}
        type='text'
        placeholder='Search items'
        value={inputValue}
        onChange={inputChangeHandler}
      />
      <div className={classes.controls}>
        <button
          title='Close search modal'
          className={`${classes.close} universal-button`}
          onClick={onClose}
          aria-label='close search window'
        >
          <VscChromeClose
            style={{ verticalAlign: 'middle', fontSize: '1.5rem' }}
          />
        </button>
      </div>
    </header>
  )
}
