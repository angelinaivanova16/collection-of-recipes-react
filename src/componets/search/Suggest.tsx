type Props = {
  name: string;
  handleSuggestClick: () => void;
};

export const Suggest = ({ name, handleSuggestClick }: Props) => {

  return (
    <button type="button" onClick={handleSuggestClick} >
      <div>
        {name}
      </div>
    </button>
  )
}