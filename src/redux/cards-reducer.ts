import { createSlice } from "@reduxjs/toolkit";

interface CardsInitialState {
  cards: [];
  id: string;
  recipe: {    
    name: string,
    image: string,
    ingredients: [],
    instructions: []
  };
}

const initialState: CardsInitialState = {
  cards: [],
  id: '',
  recipe: {
    name: '',
    image: '',
    ingredients: [],
    instructions: []
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
      state.recipe = action.payload;
    }
  },
})

export const { setCards, setDescription } = cardsSlice.actions;

export default cardsSlice.reducer;