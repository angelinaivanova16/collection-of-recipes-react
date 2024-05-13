import classes from './navbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { getDataFromLS, removeDataFromLS } from '../../utils/localStorage';
import { Button } from './../button/Button';
import { useTheme } from './../../context/ThemeContext';

export const Navbar = () => {
  const isAuth = getDataFromLS('isAuth', '""');
  const toMain = useNavigate();

  const logOut = () => {
    removeDataFromLS('isAuth');
    toMain('/');
    window.location.reload();
  };

  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={classes.navigation}>
      {isAuth ? (
        <ul className={classes.list}>
          <li className={classes.item}><NavLink to='/main' className={({ isActive }) => isActive ? classes.active : classes.link}>Main</NavLink></li>
          <li className={classes.item}><NavLink to='/favorites' className={({ isActive }) => isActive ? classes.active : classes.link}>Favorites</NavLink></li>
          <li className={classes.item}><NavLink to='/history' className={({ isActive }) => isActive ? classes.active : classes.link}>Search history</NavLink></li>
          <Button onClick={logOut}>Log Out</Button>
          <Button onClick={toggleTheme}>
            {theme === 'green' ? <span>Green theme</span> : <span>Light theme</span>}
          </Button>
        </ul>
      ) : (
        <ul className={classes.list}>
          <li className={classes.item}><NavLink to='/main' className={({ isActive }) => isActive ? classes.active : classes.link}>Main</NavLink></li>
          <li className={classes.item}><NavLink to='/loginPage' className={({ isActive }) => isActive ? classes.active : classes.link}>Sign In</NavLink></li>
          <li className={classes.item}><NavLink to='/registrationPage' className={({ isActive }) => isActive ? classes.active : classes.link}>Sign Up</NavLink></li>
          <Button onClick={toggleTheme}>
            {theme === 'green' ? <span>Green theme</span> : <span>Light theme</span>}
          </Button>        </ul>
      )}
    </nav>
  )
}