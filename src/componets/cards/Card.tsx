import { Link } from 'react-router-dom';
import classes from './card.module.css';


export const Card = ({name, image}: any) => { // Не понимаю, как передать тип string двум параметрам сразу
  return (
    
    <div className={classes.card}>
        <Link to={'/description'} className={classes.cardContainer}> {/* добавлю компонент description */}
          <img className={classes.cardImage} src={image} alt="cardImage" />
          <h1 className={classes.cardTitle}>{name}</h1>
        </Link>
        <button className={classes.btn}>Favorites</button>
    </div>
  )
}