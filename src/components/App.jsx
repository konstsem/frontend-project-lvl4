import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import UserNameContext from '../context';
import Channels from './Channels';


export default (gon, userName) => {
  const rootEl = document.getElementById('chat');
  render(
    <UserNameContext.Provider value={userName}>
      <div>
        <Channels gon={gon} />
      </div>
    </UserNameContext.Provider>,
    rootEl,
  );
};
