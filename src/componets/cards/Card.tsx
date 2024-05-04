import { NavLink } from 'react-router-dom';
import classes from './card.module.css';


type Props = {
  id: string;
  name: string;
  image: string;
};

export const Card = ({ id, name, image }: Props) => {
  return (

    <div className={classes.card}>
      <NavLink to={'/description/' + id} className={classes.cardContainer}> {/* добавлю компонент description */}
        <img className={classes.cardImage} src={image} alt="cardImage" />
        <h1 className={classes.cardTitle}>{name}</h1>
      </NavLink>
      <button className={classes.btn}>Favorites</button>
    </div>
  )
}