import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import UserNameContext from '../context';
import Channels from './Channels';
import Form from './Form';


export default (gon, userName) => {
  const rootEl = document.getElementById('chat');
  render(
    <div className="container">
      <div className="left-pan">
        <Channels gon={gon} />
      </div>
      <div className="right-pan">
        <UserNameContext.Provider value={userName}>
          <Form />
        </UserNameContext.Provider>
      </div>
    </div>,
    rootEl,
  );
};
