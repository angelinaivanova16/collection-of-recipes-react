import { NavLink } from 'react-router-dom';
import classes from './card.module.css';
import { Button } from '../button/Button';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites-reducer';
import { useAppSelector } from '../../hooks/hooks';

type Props = {
  id: string;
  name: string;
  image: string;
};

export const Card = ({ id, name, image }: Props) => {
  const stateId = useAppSelector(state => state.favorites.favoritesIds);
  const dispatch = useDispatch();

  const addFavorites = () => {
    dispatch(addToFavorites(id));
  }

  let removeFavorites = () => {
    dispatch(removeFromFavorites(id));
  }

  const RenderFavoritesControlBtn = () => {
    if (stateId.includes(id)) {
      return <Button onClick={removeFavorites}>Unfavorite</Button>
    } else {
      return <Button onClick={addFavorites}>Favorite</Button>
    }
  }

  return (

    <div className={classes.card}>
      <NavLink to={'/description/' + id} className={classes.cardContainer}>
        <img className={classes.cardImage} src={image} alt="cardImage" />
        <h1 className={classes.cardTitle}>{name}</h1>
      </NavLink>
      <RenderFavoritesControlBtn />
    </div>
  )
}