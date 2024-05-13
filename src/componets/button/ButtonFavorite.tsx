import { useDispatch } from 'react-redux';
import { Button } from './Button';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites-reducer';
import { useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { getDataFromLS } from '../../utils/localStorage';

type Props = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id: number;
};

export const ButtonFavorite = ({ onClick, children, id }: Props) => {
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
    <RenderFavoritesControlBtn />
  )
}