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
  [actions.renameChannel](state, { payload: { id, name } }) {
    const index = _.findIndex(state, (item) => item.id === id);
    const changedChannel = { id, name, removable: true };
    const newState = [...state.slice(0, index), changedChannel, ...state.slice(index + 1)];
    return newState;
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
