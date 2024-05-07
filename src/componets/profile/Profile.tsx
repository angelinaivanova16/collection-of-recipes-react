import classes from './profile.module.css';

const Profile = () => {

  return (
    <div className={classes.profile}>
      здесь будет profile
    </div>
  )
}

export default Profile; // Пришлось добавить сюда export default, т.к. lazy в App.tsx ругается без этого