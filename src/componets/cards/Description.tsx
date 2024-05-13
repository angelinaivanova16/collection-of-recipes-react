import classes from './description.module.css';
import { useParams } from 'react-router-dom';
import { useGetDescriptionQuery } from '../../api/recipesApi';
import { Preloader } from '../common/Preloader';
import { ButtonFavorite } from '../button/ButtonFavorite';

type Params = {
  userId: string;
};

const Description = () => {
  const params = useParams() as Params;

  const { data, isLoading } = useGetDescriptionQuery(params.userId);
  const recipe = data!;
  const cardId = +params.userId;

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={classes.descriptions}>
      <h1 className={classes.descriptionTitle}>{recipe.name}</h1>
      <div className={classes.wrapper}>
        <img className={classes.descriptionImage} src={recipe.image} alt="cardImage" />
        <div className={classes.rightSide}>
          <h2 className={classes.descriptionSubTitle}>Ingredients:</h2>
          <ul className={classes.ingredientList}  >
            {recipe.ingredients.map((item: string) => (
              <li key={item.toString()} className={classes.ingredient}>{item}</li>
            ))}
          </ul>
          <h2 className={classes.descriptionSubTitle}>Instructions:</h2>
          <ul className={classes.ingredientList}>
            {recipe.instructions.map((item: string) => (
              <li key={item.toString()} className={classes.instructions}>{item}</li>
            ))}
          </ul>
        </div>
        <ButtonFavorite id={cardId}/>
      </div>
    </div>
  )
}

export default Description;