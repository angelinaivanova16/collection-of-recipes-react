import classes from './button.module.css';

type Props = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ onClick, children }: Props) => {
  return (
    <button className={classes.btn} onClick={onClick}>{children}</button>
  )
}