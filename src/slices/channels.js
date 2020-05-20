import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const channels = createSlice({
  name: 'channels',
  initialState: [],
  reducers: {
    addChannel: (state, { payload: channel }) => [...state, channel],
    removeChannel: (state, { payload: id }) => _.filter(state, (channel) => channel.id !== id),
    renameChannel: (state, { payload: { id, name } }) => {
      const index = _.findIndex(state, (item) => item.id === id);
      // return state.splice(index, 1, { id, name, removable: true });
      state[index].name = name;
    },
  },
});

const { actions, reducer } = channels;

export const { addChannel, removeChannel, renameChannel } = actions;

export default reducer;
