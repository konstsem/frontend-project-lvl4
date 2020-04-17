// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { configureStore } from '@reduxjs/toolkit';
import gon from 'gon';
import faker from 'faker';
import cookies from 'js-cookie';
import io from 'socket.io-client';

import '../assets/application.scss';
import app from './App';
import {
  channels,
  messages,
  currentChannelId,
  modal,
} from './reducers';
import { addChannel, addMessage, removeChannel, setCurrentChannel } from './actions';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

// console.log('it works!');
let userName = cookies.get('name');
if (!userName) {
  userName = faker.name.findName();
  cookies.set('name', userName);
}

const store = configureStore({
  reducer: {
    channels,
    messages,
    currentChannelId,
    modal,
  },
  preloadedState: {
    ...gon,
    modal: {
      type: null,
      context: null,
    },
  },
});

const socket = io(`http://localhost:${process.env.PORT || 5000}`);
socket.on('newChannel', ({ data: { attributes } }) => store.dispatch(addChannel(attributes)));
socket.on('newMessage', ({ data: { attributes } }) => store.dispatch(addMessage(attributes)));
socket.on('removeChannel', ({ data: { id } }) => {
  store.dispatch(setCurrentChannel(1));
  store.dispatch(removeChannel(id));
});

app(store, userName);
