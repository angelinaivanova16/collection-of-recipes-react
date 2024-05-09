import { Link } from 'react-router-dom';
import classes from './formRegistrationLogin.module.css';
import { Button } from '../button/Button';

const FormRegistrationLogin = () => {
  return (
      <form className={classes.formRegistration} action="">
        <Link to={'/authorization'}>
          <p className={classes.formSubtitle}>Авторизоваться</p>
        </Link>
        <div className={classes.formWrapper}>
          <h1 className={classes.formTitle}>Sign Up</h1>
          <input
              className={classes.formItem}
              type="text"
              placeholder="login"
              id="login"
            />
          <p className={classes.formNotification} id="notification1"></p>
          <input
              className={classes.formItem}
              type="password"
              placeholder="password"
              id="password"
            />
          <p className="form-registration__notification" id="notification2"></p>
          <Button>Sign up</Button>
        </div>
      </form>
  )
}

export default FormRegistrationLogin;