import { Navbar } from '../navbar/Navbar';
import classes from './header.module.css';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoAndTitle}>
        <img className={classes.logo} src='/collection-of-recipes-react/images/logo.jpg' alt="logo" />
        <h1 className={classes.title}>recipes</h1>
      </div>
      <Navbar />
    </header>
  )
}