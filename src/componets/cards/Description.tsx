import { useParams } from 'react-router-dom';
import classes from './description.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import { setDescription } from '../../redux/cards-reducer';
import axios from 'axios';

export const Description = () => {
  let recipe = useAppSelector(state => state.cards.recipe);
  const dispatch = useDispatch();

  let params = useParams();
  let cardId = params.userId;

  useEffect(() => {
    dispatch(setDescription(cardId));
    axios.get("https://dummyjson.com/recipes/" + cardId)
      .then(response => {
        dispatch(setDescription(response.data))
      })
  }, [cardId, dispatch]);

  return (
    <div className={classes.descriptions}>
      <div className={classes.wrapper}>
        <img className={classes.descriptionImage} src={recipe.image} alt="cardImage" />
        <div className={classes.rightSide}>
          <h1 className={classes.descriptionTitle}>{recipe.name}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, inventore amet? Neque impedit maxime nobis! Quo, culpa asperiores hic iusto quasi tempora, error natus nesciunt similique fugiat et ab! Ipsum.</p>
        </div>
      </div>

      <button className={classes.btn}>Favorites</button>
    </div>
  )
}