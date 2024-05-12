import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLS, getKey } from "../utils/localStorage";

interface HistoryInitialState {
  history: string[];
}

const initialState: HistoryInitialState = {
  history: getDataFromLS(getKey('history'), '[]')
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      state.history.push(action.payload)
    },
    removeFromHistory: (state, action) => {
      state.history = state.history.filter((id) => {
        return id !== action.payload;
      })
    }
  },
})

export const { addToHistory, removeFromHistory } = historySlice.actions;

export default historySlice.reducer;