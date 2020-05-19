import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import io from 'socket.io-client';
import UserNameContext from './context';
import * as reducers from './reducers';
import {
  addChannel,
  addMessage,
  removeChannel,
  renameChannel,
  setCurrentChannel,
} from './actions';
import Channels from './components/Channels';
import Main from './components/Main';
import Modal from './components/Modal';

export default (gon, userName) => {
  const store = configureStore({
    reducer: { ...reducers },
    preloadedState: {
      ...gon,
      modal: {
        type: null,
        context: null,
      },
    },
  });
  const socket = io();
  socket.on('newChannel', ({ data: { attributes } }) => store.dispatch(addChannel(attributes)));
  socket.on('newMessage', ({ data: { attributes } }) => store.dispatch(addMessage(attributes)));
  socket.on('removeChannel', ({ data: { id } }) => {
    store.dispatch(setCurrentChannel(1));
    store.dispatch(removeChannel(id));
  });
  socket.on('renameChannel', ({ data: { id, attributes: { name } } }) => {
    store.dispatch(renameChannel({ id, name }));
  });

  const rootEl = document.getElementById('chat');
  render(
    <Provider store={store}>
      <div className="app wrapper d-flex">
        <Channels />
        <UserNameContext.Provider value={userName}>
          <Main />
        </UserNameContext.Provider>
        <Modal />
      </div>
    </Provider>,
    rootEl,
  );
};
