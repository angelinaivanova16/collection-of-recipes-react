import FormRegistrationLogin from './FormRegistrationLogin';
import classes from './registrationPage.module.css';

const LoginPage = () => {
  return (
    <div className={classes.registrationContainer}>
      <FormRegistrationLogin name='sign in' toggle='Sign up' link={'/registrationPage'}/>
    </div>
  )
}

export default LoginPage;