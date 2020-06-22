import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { removeChannel } from './channels';

const messages = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage: (state, { payload: message }) => { state.push(message); },
  },
  extraReducers: {
    [removeChannel]:
      (state, { payload: id }) => _.filter(state, (message) => message.channelId !== id),
  },
});

const { actions, reducer } = messages;

export const { addMessage } = actions;

export default reducer;
