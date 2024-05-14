import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectFavoritesState = (state: RootState) => state.favorites;

export const selectFavoriteItems = createSelector(
  [selectFavoritesState],
  (favoritesState) => favoritesState.favoritesIds,
);