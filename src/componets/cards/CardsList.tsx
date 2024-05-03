import classes from './cardsList.module.css';
import { Card } from './Card';
import { useAppSelector } from '../../hooks/hooks';
import { useEffect } from 'react';
import axios from 'axios';
import { setCards } from '../../redux/cards-reducer';
import { useDispatch } from 'react-redux';




export const CardsList = () => {
  let stateCards = useAppSelector(state => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then(response => {
        dispatch(setCards(response.data.recipes))
      })
  }, [dispatch]);

  return (
    <main className={classes.cardsList}>
      {stateCards.cards.map((item: any) => ( // от всех any избавлюсь, изучаю typescript
        <Card key={item.id} {...item} />
      )
      )}
    </main>
  )
}