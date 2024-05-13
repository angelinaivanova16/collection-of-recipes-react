import classes from './card.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../button/Button';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites-reducer';
import { useAppSelector } from '../../hooks/hooks';
import PropTypes from 'prop-types';
import { getDataFromLS } from '../../utils/localStorage';

type Props = {
  id: string;
  name: string;
  image: string;
};

export const Card = ({ id, name, image }: Props) => {
  const toLogin = useNavigate();
  const isAuth = getDataFromLS('isAuth', '""');
  const stateId = useAppSelector(state => state.favorites.favoritesIds);
  const dispatch = useDispatch();

  const addFavorites = () => {
    isAuth ? (
      dispatch(addToFavorites(id))
    ) : (
      toLogin('/loginPage')
    )

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

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string
};