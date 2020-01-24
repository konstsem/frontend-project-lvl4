// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import gon from 'gon';
import faker from 'faker';
import cookies from 'js-cookie';

import '../assets/application.scss';
import app from './components/App';

// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

console.log('it works!');
let userName = cookies.get('name');
if (!userName) {
  userName = faker.name.findName();
  cookies.set('name', userName);
}

app(gon, userName);
