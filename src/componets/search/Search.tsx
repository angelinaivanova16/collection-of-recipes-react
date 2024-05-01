import classes from './search.module.css';

export const Search = () => {
  return (
    <form action="" className={classes.formSearch}>
      <input placeholder='Search recipe...' type="search" className={classes.inputSearch} />
      <button type='submit' className={classes.btn}></button>
    </form>
  )
}