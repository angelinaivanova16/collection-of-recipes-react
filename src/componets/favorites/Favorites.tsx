import classes from './favorites.module.css';
import { useGetRecipesQuery } from '../../api/recipesApi';
import { useAppSelector } from '../../hooks/hooks';
import { Card } from '../cards/Card';
import { Preloader } from '../common/Preloader';
import { selectFavoriteItems } from '../../redux/selectors/favoriteSelector';

const Favorites = () => {
  const favoriteIds = useAppSelector(selectFavoriteItems);
  const { data, isLoading } = useGetRecipesQuery();
  const recipes = data!;

  if (isLoading) {
    return <Preloader />;
  }

  type Props = {
    id: number;
    name: string;
    image: string;
  };

  let favoritesCards = recipes.filter((item: Props) => {
    return favoriteIds.includes(item.id)
  })

  if (favoriteIds.length < 1) {
    return <p className={classes.withoutRecipes}>You don't have favorite recipes</p>
  } else {
    return (
      <div className={classes.favorites}>
        {favoritesCards.map((item) => (
          <Card key={item['id']} id={item['id']} name={item['name']} image={item['image']} />
        )
        )}
      </div>
    )
  }
}

export default Favorites;