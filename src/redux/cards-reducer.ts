import { createSlice } from "@reduxjs/toolkit";

interface CardsInitialState {
  cards: [];
}

const initialState: CardsInitialState = {
  cards: []
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload
    },
  },
})

export const { setCards } = cardsSlice.actions;

export default cardsSlice.reducer;