import { Product } from '../../MainProductGrid/MainProductGrid'
import classes from './SearchResults.module.css'

type Props = {
  searchHasNoResults: boolean
  hasNoSearchInput: boolean
  foundItems: Product[]
}

export const SearchResults = ({
  foundItems,
  hasNoSearchInput,
  searchHasNoResults,
}: Props) => {
  const NoInputMessage = (
    <p className={classes.message}>Please enter a search term</p>
  )

  const NoResultsMessage = <p className={classes.message}>No results found</p>

  return (
    <main className={classes.root}>
      {hasNoSearchInput && NoInputMessage}
      {searchHasNoResults && NoResultsMessage}
    </main>
  )
}
