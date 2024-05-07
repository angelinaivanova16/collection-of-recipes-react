import { createSlice } from "@reduxjs/toolkit";

interface InitializeInitialState {
  initialized: boolean;
}

const initialState: InitializeInitialState = {
  initialized: false,
}

export const initializeSlice = createSlice({
  name: 'initialize',
  initialState,
  reducers: {
    initializeApp: (state, action) => {
      state.initialized = action.payload
    },
  },
})

export const { initializeApp } = initializeSlice.actions;

export default initializeSlice.reducer;