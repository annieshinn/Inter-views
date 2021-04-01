import { createSlice } from '@reduxjs/toolkit';

export interface cardState {
  title: string,
  stages: Array<string>,
  date: Date | null,
}

const initialState = {
  title: '',
  stages: [],
  date: null
} as cardState;

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state) => {
      state.title,
      state.stages,
      state.date
    },
  },
})

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;