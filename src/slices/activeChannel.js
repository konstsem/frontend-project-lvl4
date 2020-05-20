import { createSlice } from '@reduxjs/toolkit';

const currentChannelId = createSlice({
  name: 'currentChannelId ',
  initialState: '',
  reducers: {
    setCurrentChannel: (state, { payload: id }) => id,
  },
});

const { actions, reducer } = currentChannelId;

export const { setCurrentChannel } = actions;

export default reducer;
