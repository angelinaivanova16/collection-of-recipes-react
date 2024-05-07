import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cards-reducer";
import favoritesReducer from "./favorites-reducer";
import initializeReducer from "./app-reducer";


let reducers = combineReducers({
  cards: cardsReducer,
  favorites: favoritesReducer,
  initialize: initializeReducer,
})

export const store = configureStore({
  reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch