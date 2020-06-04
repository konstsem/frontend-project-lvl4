import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const channels = createSlice({
  name: 'channels',
  initialState: [],
  reducers: {
    addChannel: (state, { payload: channel }) => [...state, channel],
    removeChannel: (state, { payload: id }) => _.filter(state, (channel) => channel.id !== id),
    renameChannel: (state, { payload: { id, name } }) => {
      const currentChannel = _.find(state, (item) => item.id === id);
      currentChannel.name = name;
    },
  },
});

const { actions, reducer } = channels;

export const { addChannel, removeChannel, renameChannel } = actions;

export default reducer;
