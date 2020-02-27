// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { configureStore } from '@reduxjs/toolkit';
import gon from 'gon';
import faker from 'faker';
import cookies from 'js-cookie';

import '../assets/application.scss';
import app from './App';
import { channels, messages, currentChannelId } from './reducers';

// import io from 'socket.io-client';

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
  },
  preloadedState: gon,
});

app(store, userName);
