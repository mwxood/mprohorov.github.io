import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InfoReducer } from '../types';

export const infoSlice = createSlice({
  name: 'info',
  initialState: { items: [] },
  reducers: {
    addInfo: (state, action: PayloadAction<string[]>): any => {
      return { items: [...state.items, action.payload] };
    },
  },
});

export const infoAction = infoSlice.actions;
