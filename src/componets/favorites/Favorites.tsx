import { useAppSelector } from '../../hooks/hooks';
import { Card } from '../cards/Card';
import classes from './favorites.module.css';

export const Favorites = () => { // Следующим шагом сделаю авторизацию и "избранное" закрытым для гостей.
  const favoriteIds = useAppSelector(state => state.favorites.favoritesIds);
  const cards = useAppSelector(state => state.cards.cards);

  type Props = {
    id: string;
    name: string;
    image: string;
  };

  let favoritesCards = cards.filter((item: Props) => {
    return  favoriteIds.includes(item.id)
  })

  
  
  return (
    <div className={classes.favorites}>
      {favoritesCards.map((item) => (
        <Card id={item['id']} name={item['name']} image={item['image']} />
      )
      )}
    </div>
  )
}