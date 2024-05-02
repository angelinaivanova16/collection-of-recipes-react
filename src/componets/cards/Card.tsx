import { Link } from 'react-router-dom';
import classes from './card.module.css';

export const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.cardWrapper}>
        <Link to={'/description'} className={classes.cardContainer}> {/* добавить компонент description */}
          <img className={classes.cardImage} src='' alt="cardImage" />
          <h1 className={classes.cardTitle}>title</h1>
        </Link>
        <button className={classes.btn}>Favorites</button>
      </div>
    </div>
  )
}