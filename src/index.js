// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import gon from 'gon';

import '../assets/application.scss';
import app from './components/App';

// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

console.log('it works!');
app(gon);
