import { CardsList } from "../cards/CardsList"

const Main = () => {
  return (
    <CardsList />
  )
}

export default Main; // Пришлось добавить сюда export default, т.к. lazy в App.tsx ругается без этого