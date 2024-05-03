import { createSlice } from "@reduxjs/toolkit";

const initialState: any = { // от всех any избавлюсь, изучаю typescript
  cards: [],
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