import { Link } from 'react-router-dom';
import classes from './formRegistrationLogin.module.css';
import { Button } from '../button/Button';

type Props = {
  name: string;
  toggle: string;
  link: string;
};

const FormRegistrationLogin = ({ name, toggle, link }: Props) => {
  return (
      <form className={classes.formRegistration} action="">
        <Link to={link}>
          <p className={classes.formSubtitle}>{toggle}</p>
        </Link>
        <div className={classes.formWrapper}>
          <h1 className={classes.formTitle}>{name}</h1>
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
          <Button>{name}</Button>
        </div>
      </form>
  )
}

export default FormRegistrationLogin;