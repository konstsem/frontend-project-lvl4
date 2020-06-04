import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const messages = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage: (state, { payload: message }) => { state.push(message); },
    removeMessageByChannelId:
      (state, { payload: id }) => _.filter(state, (message) => message.channelId !== id),
  },
});

const { actions, reducer } = messages;

export const { addMessage, removeMessageByChannelId } = actions;

export default reducer;
