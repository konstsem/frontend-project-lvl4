import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const channels = createSlice({
  name: 'channels',
  initialState: {},
  reducers: {
    addChannel: (state, { payload: channel }) => {
      state.listChannels.push(channel);
    },
    removeChannel: (state, { payload: id }) => ({
      currentChannelId: 1,
      listChannels: _.filter(state.listChannels, (channel) => channel.id !== id),
    }),
    renameChannel: (state, { payload: { id, name } }) => {
      const currentChannel = _.find(state.listChannels, (item) => item.id === id);
      currentChannel.name = name;
    },
    setCurrentChannel: (state, { payload: id }) => ({
      ...state,
      currentChannelId: id,
    }),
  },
});

const { actions, reducer } = channels;

export const {
  addChannel,
  removeChannel,
  renameChannel,
  setCurrentChannel,
} = actions;

export default reducer;
