import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLS, key } from "../utils/localStorage";

interface FavoritesInitialState {
  favoritesIds: string[];
}

const initialState: FavoritesInitialState = {
  favoritesIds: getDataFromLS(key('favorites'), '[]')
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favoritesIds.push(action.payload)
    },
    removeFromFavorites: (state, action) => {
      state.favoritesIds = state.favoritesIds.filter((id) => {
        return id !== action.payload;
      })
    }
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;