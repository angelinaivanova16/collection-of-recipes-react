import classes from './favorites.module.css';
import { useGetRecipesQuery } from '../../api/recipesApi';
import { useAppSelector } from '../../hooks/hooks';
import { Card } from '../cards/Card';
import { Preloader } from '../common/Preloader';
import { useNavigate } from 'react-router-dom';
import { getDataFromLS } from '../../utils/localStorage';

const Favorites = () => {
  const toLogin = useNavigate();
  const isAuth = getDataFromLS('isAuth', '""');
  const favoriteIds = useAppSelector(state => state.favorites.favoritesIds);
  const { data, isLoading } = useGetRecipesQuery();
  const recipes = data!;

  if (isLoading) {
    return <Preloader />;
  }

  if (!isAuth) {
    toLogin('/loginPage')
  }

  type Props = {
    id: number;
    name: string;
    image: string;
  };

  let favoritesCards = recipes.filter((item: Props) => {
        console.log(typeof item.id)
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