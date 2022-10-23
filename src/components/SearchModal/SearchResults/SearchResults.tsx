import { Product } from '../../MainProductGrid/MainProductGrid'
import { ResultItem } from './ResultItem/ResultItem'
import classes from './SearchResults.module.css'

type Props = {
  hasNoSearchInput: boolean
  foundItems: Product[]
}

export const SearchResults = ({ foundItems, hasNoSearchInput }: Props) => {
  const NoInputMessage = (
    <p className={classes.message}>Please enter a search term</p>
  )

  const NoResultsMessage = <p className={classes.message}>No results</p>

  return (
    <main className={classes.root}>
      {hasNoSearchInput && NoInputMessage}
      {foundItems.length === 0 && !hasNoSearchInput && NoResultsMessage}
      {!hasNoSearchInput && (
        <ul className={classes.results}>
          {foundItems.map((item) => (
            <ResultItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </main>
  )
}
