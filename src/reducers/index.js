import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

export const channels = createReducer([], {
  [actions.addChannel](state, { payload: channel }) {
    return [
      ...state,
      channel,
    ];
  },
});

export const messages = createReducer([], {
  [actions.addMessage](state, { payload: message }) {
    return [
      ...state,
      message,
    ];
  },
});

export const currentChannelId = createReducer('', {
  [actions.setCurrentChannel](state, { payload: id }) {
    return id;
  },
});
