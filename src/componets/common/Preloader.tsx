import classes from './preloader.module.css';

export const Preloader = () => {
  return (
    <img className={classes.preloader} src="/collection-of-recipes-react/images/preloader.gif" alt="Loading..." />
  )
}