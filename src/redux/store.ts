import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cards-reducer";
import favoritesReducer from "./favorites-reducer";

let reducers = combineReducers({
  cards: cardsReducer,
  favorites: favoritesReducer,
})

export const store = configureStore({
  reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch