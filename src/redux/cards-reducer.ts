import { createSlice } from "@reduxjs/toolkit";

interface CardsInitialState {
  cards: [];
  id: string;
  recipe: {    
    name: string,
    image: string
  };
}

const initialState: CardsInitialState = {
  cards: [],
  id: '',
  recipe: {
    name: '',
    image: ''
  }
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload
    },
    setDescription: (state, action) => {
      // state.id = action.payload
      state.recipe = action.payload
      // console.log(state.recipe)
    }
  },
})

export const { setCards, setDescription } = cardsSlice.actions;

export default cardsSlice.reducer;