import classes from './registrationPage.module.css';
import { getData, setDataToLS } from '../../utils/localStorage';
import FormRegistrationLogin from './FormRegistrationLogin';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const toMain = useNavigate();

  const [errorLogin, setErrorLogin] = useState({});

  const loginSubmit = (data) => {
    const users = JSON.parse(getData('users'));
    if (!users) {
      setErrorLogin({
        email: 'Wrong email',
        password: ''
      });
      return;
    }
    if (!users.find((user) => user.email === data.email)) {
      setErrorLogin({
        email: 'Wrong email',
        password: ''
      });
      return;
    }
    users.forEach((user) => {
      if (user.email === data.email && user.password === data.password) {
        setDataToLS('isAuth', data.email);
        toMain('/');
        window.location.reload();
      }
    });
    setErrorLogin({ email: '', password: 'Wrong password' });
  };


  return (
    <div className={classes.registrationContainer}>
      <FormRegistrationLogin
        name='sign in'
        toggle='Sign up'
        link={'/registrationPage'}
        submit={loginSubmit}
      />
      {errorLogin && errorLogin.email && (
        <span className={classes.notification}>{errorLogin.email}</span>
      )}
      {errorLogin && errorLogin.password && (
        <span className={classes.notification}>{errorLogin.password}</span>
      )}
    </div>
  )
}

export default LoginPage;