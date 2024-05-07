import classes from './history.module.css';

const History = () => {
  return (
    <div className={classes.history}>
      здесь будет history
    </div>
  )
}

export default History; // Пришлось добавить сюда export default, т.к. lazy в App.tsx ругается без этого