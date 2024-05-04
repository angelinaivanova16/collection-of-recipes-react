import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import classes from './profile.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setDescription } from '../../redux/cards-reducer';

export const Profile = () => {

  let id = useAppSelector(state => state.cards.id);
  const dispatch = useDispatch();

  let { cardId } = useParams();
  if (!cardId) {
    cardId = id;
  }

  useEffect(() => {
    dispatch(setDescription(cardId));
  }, [cardId]);

  return (
    <div className={classes.profile}>
      здесь будет profile
    </div>
  )
}