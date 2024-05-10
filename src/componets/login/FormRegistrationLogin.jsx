import classes from './formRegistrationLogin.module.css';
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  TextField
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';


const FormRegistrationLogin = ({ name, toggle, link, submit }) => {

  const formik = useFormik({
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 2) {
        errors.password = 'Must be 2 characters or more';
      }
      return errors;
    },
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      submit(values);
    }
  });

  return (
    <form className={classes.formRegistration} onSubmit={formik.handleSubmit}>
      <FormControl>
        
        <Link to={link}>
          <p className={classes.formSubtitle}>{toggle}</p>
        </Link>

        <FormLabel>
          <h1 className={classes.formTitle}>{name}</h1>
        </FormLabel>

        <FormGroup className={classes.formWrapper}>

          <TextField
            label="Email"
            margin="normal"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <p className={classes.notification}>{formik.errors.email}</p>
          )}

          <TextField
            type="password"
            label="Password"
            margin="normal"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <p className={classes.notification}>{formik.errors.password}</p>
          )}

          <Button type={'submit'} variant={'contained'} color={'primary'}>
						{name}
					</Button>

        </FormGroup>
      </FormControl>
    </form>
  )
}

FormRegistrationLogin.propTypes = {
  name: PropTypes.string,
  toggle: PropTypes.string,
  link: PropTypes.string,
  submit: PropTypes.func
};

export default FormRegistrationLogin;