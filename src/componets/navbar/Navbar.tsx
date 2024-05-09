import { NavLink } from 'react-router-dom';
import classes from './navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={ classes.list }>
        <li className={ classes.item }><NavLink to='/main' className={ ({ isActive }) => isActive ? classes.active : classes.link }>Main</NavLink></li>
        <li className={ classes.item }><NavLink to='/profile' className={ ({ isActive }) => isActive ? classes.active : classes.link }>Profile</NavLink></li>
        <li className={ classes.item }><NavLink to='/favorites' className={ ({ isActive }) => isActive ? classes.active : classes.link }>Favorites</NavLink></li>
        <li className={ classes.item }><NavLink to='/history' className={ ({ isActive }) => isActive ? classes.active : classes.link }>History search</NavLink></li>
        <li className={ classes.item }><NavLink to='/registrationPage' className={ ({ isActive }) => isActive ? classes.active : classes.link }>Sign Up</NavLink></li>
      </ul>
    </nav>
  )
}