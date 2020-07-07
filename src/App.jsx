import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import io from 'socket.io-client';
import UserNameContext from './context';
import { addChannel, removeChannel, renameChannel } from './slices/channels';
import { addMessage } from './slices/messages';
import Channels from './components/Channels';
import Main from './components/Main';
import Modal from './components/Modal';
import rootReducer from './slices';

import './i18n';

export default (gon, userName) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
      channels: {
        listChannels: gon.channels,
        currentChannelId: gon.currentChannelId,
      },
      messages: gon.messages,
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
    store.dispatch(removeChannel(id));
  });
  socket.on('renameChannel', ({ data: { id, attributes: { name } } }) => {
    store.dispatch(renameChannel({ id, name }));
  });

  const rootEl = document.getElementById('chat');
  render(
    <Provider store={store}>
      <div className="h-100 d-flex">
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
