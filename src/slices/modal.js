import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {},
  reducers: {
    setModal: (state, { payload: { type, context } }) => ({ type, context }),
    hideModal: () => ({ type: null, context: null }),
  },
});

const { actions, reducer } = modal;

export const { setModal, hideModal } = actions;

export default reducer;
