import { Link } from 'react-router-dom';
import classes from './card.module.css';


type Props = {
   name: string;
   image: string;
};

export const Card = ({ name, image }: Props) => {
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