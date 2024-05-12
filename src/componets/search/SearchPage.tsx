import classes from './searchPage.module.css';
import { Preloader } from '../common/Preloader';
import { useGetRecipesBySearchQuery } from '../../api/recipesApi';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../cards/Card';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('name');

  const {
    data,
    isLoading,
  } = useGetRecipesBySearchQuery(searchName || '');
  const recipes = data!;

  if (isLoading) {
    return <Preloader />;
  }

  if (recipes.length < 1) {
    return <p className={classes.withoutResults}>Nothing was found</p>
  } else {
    return (
      <div>
        <h2 className={classes.searchPageTitle}>Okay... so here's what we found:</h2>
        <div className={classes.searchPageWrapper}>
          {recipes.map((item) => (
            <Card key={item['id']} id={item['id']} name={item['name']} image={item['image']} />
          ))}
        </div>
      </div>
    )
  }
}