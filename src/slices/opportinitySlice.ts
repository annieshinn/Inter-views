import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

export interface opportinityState {
  company: string
  event_name: string
  event_date: Date | null
  phone_screen: boolean
  tech_interview: boolean
  status: string
}

const initialState = {
  company: '',
  event_name: '',
  event_date: null, //will be DATE
  phone_screen: false,
  tech_interview: false,
  status: ''
} as opportinityState

export const action = createAction<boolean>(`addOpportunity/submitOpportunity`);

export const OpportunitySlice = createSlice({
  name: 'addOpportunity',
  initialState,
  reducers: {
    submitOpportunity: (state:any, action: PayloadAction<string | boolean | Date | any /*refer to docs on how to properly type this*/>) => {
      state[action.payload.key] = action.payload;
    },
  },
})

// export const { addOpportunity } = OpportunitySlice.actions;
export default OpportunitySlice.reducer;