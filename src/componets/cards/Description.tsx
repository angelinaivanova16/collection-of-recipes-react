import { useParams } from 'react-router-dom';
import classes from './description.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import { setDescription } from '../../redux/cards-reducer';
import axios from 'axios';
import { Button } from '../button/Button';

const Description = () => {
  let recipe = useAppSelector(state => state.cards.recipe);
  const dispatch = useDispatch();

  let params = useParams();
  let cardId = params.userId;

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes/" + cardId)
      .then(response => {
        dispatch(setDescription(response.data))
      })
  }, [cardId, dispatch]);

  return (
    <div className={classes.descriptions}>
      <h1 className={classes.descriptionTitle}>{recipe.name}</h1>
      <div className={classes.wrapper}>
        <img className={classes.descriptionImage} src={recipe.image} alt="cardImage" />
        <div className={classes.rightSide}>
          <h2 className={classes.descriptionSubTitle}>Ingredients:</h2>
          <ul className={classes.ingredientList}  >
            {recipe.ingredients.map((item: string) => (
              <li className={classes.ingredient}>{item}</li>
            ))}
          </ul>
          <h2 className={classes.descriptionSubTitle}>Instructions:</h2>
          <ul className={classes.ingredientList}>
            {recipe.instructions.map((item: string) => (
              <li className={classes.instructions}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Description; // Пришлось добавить сюда export default, т.к. lazy в App.tsx ругается без этого