import classes from './navbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { getDataFromLS, removeDataFromLS } from '../../utils/localStorage';
import { Button } from '../button/Button';

export const Navbar = () => {
  const isAuth = getDataFromLS('isAuth', '""');

  const toMain = useNavigate();

  const logOut = () => {
    removeDataFromLS('isAuth');
    toMain('/');
    window.location.reload();
  };

  return (
    <nav className={classes.navigation}>
      {isAuth ? (
        <ul className={classes.list}>
          <li className={classes.item}><NavLink to='/main' className={({ isActive }) => isActive ? classes.active : classes.link}>Main</NavLink></li>
          <li className={classes.item}><NavLink to='/favorites' className={({ isActive }) => isActive ? classes.active : classes.link}>Favorites</NavLink></li>
          <li className={classes.item}><NavLink to='/history' className={({ isActive }) => isActive ? classes.active : classes.link}>History search</NavLink></li>
          <Button onClick={logOut}>Log Out</Button>
        </ul>
      ) : (
        <ul className={classes.list}>
          <li className={classes.item}><NavLink to='/main' className={({ isActive }) => isActive ? classes.active : classes.link}>Main</NavLink></li>
          <li className={classes.item}><NavLink to='/loginPage' className={({ isActive }) => isActive ? classes.active : classes.link}>Sign In</NavLink></li>
          <li className={classes.item}><NavLink to='/registrationPage' className={({ isActive }) => isActive ? classes.active : classes.link}>Sign Up</NavLink></li>
        </ul>
      )}
    </nav>
  )
}