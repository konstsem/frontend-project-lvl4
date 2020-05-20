import { createSlice } from '@reduxjs/toolkit';

const messages = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage: (state, { payload: message }) => [...state, message],
  },
});

const { actions, reducer } = messages;

export const { addMessage } = actions;

export default reducer;
