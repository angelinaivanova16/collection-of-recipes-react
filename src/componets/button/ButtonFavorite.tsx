import { useDispatch } from 'react-redux';
import { Button } from './Button';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites-reducer';
import { useAppSelector } from '../../hooks/hooks';

type Props = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id: number;
};

export const ButtonFavorite = ({ onClick, children, id }: Props) => {
  const stateId = useAppSelector(state => state.favorites.favoritesIds);
  const dispatch = useDispatch();

  const addFavorites = () => {
    dispatch(addToFavorites(id))
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