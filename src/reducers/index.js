import { createReducer } from '@reduxjs/toolkit';
import _ from 'lodash';
import * as actions from '../actions';

export const channels = createReducer([], {
  [actions.addChannel](state, { payload: channel }) {
    return [
      ...state,
      channel,
    ];
  },
  [actions.removeChannel](state, { payload: id }) {
    return _.filter(state, (channel) => channel.id !== id);
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

export const modal = createReducer({}, {
  [actions.setModal](state, { payload: { type, context } }) {
    return { type, context };
  },
  [actions.hideModal]() {
    return ({ type: null, context: null });
  },
});
