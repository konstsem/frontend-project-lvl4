import { createSlice } from '@reduxjs/toolkit';

const channels = createSlice({
  name: 'channels',
  initialState: {},
  reducers: {
    addChannel: (state, { payload: channel }) => {
      state.listChannels.push(channel);
    },
    removeChannel: (state, { payload: id }) => ({
      currentChannelId: 1,
      listChannels: state.listChannels.filter((channel) => channel.id !== id),
    }),
    renameChannel: (state, { payload: { id, name } }) => {
      const currentChannel = state.listChannels.find((item) => item.id === id);
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
