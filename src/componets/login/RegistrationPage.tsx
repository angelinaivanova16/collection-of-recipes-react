import FormRegistrationLogin from './FormRegistrationLogin';
import classes from './registrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={classes.registrationContainer}>
      <FormRegistrationLogin />
    </div>
  )
}

export default RegistrationPage;