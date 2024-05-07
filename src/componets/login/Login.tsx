import classes from './login.module.css';

const Login = () => {
  return (
    <div className={classes.login}>
      здесь будет login
    </div>
  )
}

export default Login; // Пришлось добавить сюда export default, т.к. lazy в App.tsx ругается без этого