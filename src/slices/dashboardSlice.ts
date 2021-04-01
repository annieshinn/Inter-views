import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

export interface dashboardState {
  renderModal: boolean
}

export const toggleActionCreator = createAction<boolean>('modalIsOpen/toggleModal');


const initialState:dashboardState = {
  renderModal: false
}

export const dashboardSlice = createSlice({
  name: 'modalIsOpen',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.renderModal = action.payload;
    },
  },
})

export const { toggleModal } = dashboardSlice.actions;
export default dashboardSlice.reducer;