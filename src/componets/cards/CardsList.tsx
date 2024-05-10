import classes from './cardsList.module.css';
import { Card } from './Card';
import { useGetRecipesQuery } from '../../api/recipesApi';
import { Preloader } from '../common/Preloader';

export const CardsList = () => {
  const { data, isLoading } = useGetRecipesQuery();
  const recipes = data!;


  if (isLoading) {
		return <Preloader />;
	}

  return (
    <main className={classes.cardsList}>
      {recipes.map((item) => (
        <Card key={item['id']} id={item['id']} name={item['name']} image={item['image']} />
      )
      )}
    </main>
  )
}