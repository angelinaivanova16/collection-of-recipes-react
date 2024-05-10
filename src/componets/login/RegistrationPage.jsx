import classes from './registrationPage.module.css';
import FormRegistrationLogin from './FormRegistrationLogin';
import { getData, setDataToLS } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RegistrationPage = () => {
  const toMain = useNavigate();

  const [errorRegister, setErrorRegister] = useState({});

  const registerSubmit = (data) => {

    let users = JSON.parse(getData('users'));

    if (users === null) {
      setDataToLS('users', [data]);
      setDataToLS('isAuth', data.email);
      toMain('/');
      window.location.reload();
    } else {
      if (users.find((user) => user.email === data.email)) {
        setErrorRegister({email: 'User already exists', password: ''});
        return;
      }
      setDataToLS('users', [...users, data]);
      setDataToLS('isAuth', data.email);
      toMain('/');
      window.location.reload();
    }
  };

  return (
    <div className={classes.registrationContainer}>
      <FormRegistrationLogin
        name='sign up'
        toggle='Sign in'
        link={'/loginPage'}
        submit={registerSubmit}
      />
      {errorRegister && errorRegister.email && (
				<p className={classes.notification}>{errorRegister.email}</p>
			)}
			{errorRegister && errorRegister.password && (
				<p className={classes.notification}>{errorRegister.password}</p>
			)}
    </div>
  )
}

export default RegistrationPage;