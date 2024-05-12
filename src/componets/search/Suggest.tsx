import classes from './suggest.module.css';

type Props = {
  name: string;
  handleSuggestClick: () => void;
};

export const Suggest = ({ name, handleSuggestClick }: Props) => {

  return (
    <button className={classes.container} type="button" onClick={handleSuggestClick} >
      <div className={classes.name}>
        {name}
      </div>
    </button>
  )
}