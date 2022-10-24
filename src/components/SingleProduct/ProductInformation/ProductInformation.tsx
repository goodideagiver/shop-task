import classes from './ProductInformation.module.css'

type Props = {
  name: string
  description: string
}

export const ProductInformation = ({ name, description }: Props) => {
  return (
    <div className={classes.root}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}
