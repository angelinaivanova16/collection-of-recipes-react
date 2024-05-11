import classes from './history.module.css';
import { useAppSelector } from '../../hooks/hooks';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromHistory } from '../../redux/history-reducer';
import { getDataFromLS, setDataToLS } from '../../utils/localStorage';

const History = () => {
  const history = useAppSelector(state => state.history.history);
  const dispatch = useDispatch();
  const isAuth = getDataFromLS('isAuth', '""');
	const isAuthHistory = isAuth + ' history';

  function removeHistoryItem(e: any) {
		const remove = e.target.getAttribute('id');
		dispatch(removeFromHistory(remove));
		const history = getDataFromLS(isAuthHistory, '[]').filter(
			(el: any) => el !== remove
		);
		setDataToLS(isAuthHistory, history);
	}

  return (
    <div className={classes.history}>
      <h2 className={classes.historyTitle}>Search history:</h2>
      {history.length ? (
        <div>
          {history.map((el, id) => (
            <div className={classes.history} key={id}>
              <Link className={classes.link} to={`/search?name=${el}`}>
                {el}
              </Link>
              <span id={el} className={classes.btn} onClick={removeHistoryItem}>
                delete
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className={classes.historyEmpty}>Search history is empty</p>
      )}
    </div>
  )
}

export default History;