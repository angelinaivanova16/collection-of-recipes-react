import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import cardsReducer from "./cards-reducer";
import favoritesReducer from "./favorites-reducer";
import initializeReducer from "./app-reducer";
import { recipesApi } from "../api/recipesApi";
import { MyMiddleware } from "./middleware";


let reducers = combineReducers({
  // cards: cardsReducer,
  favorites: favoritesReducer,
  initialize: initializeReducer,
  [recipesApi.reducerPath]: recipesApi.reducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(recipesApi.middleware).concat(MyMiddleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch