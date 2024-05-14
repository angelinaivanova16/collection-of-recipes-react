import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectHistoryState = (state: RootState) => state.history;

export const selectHistoryItems = createSelector(
  [selectHistoryState],
  (historyState) => historyState.history,
);