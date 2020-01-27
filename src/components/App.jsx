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
      <div className="row">
        <div className="col-3 left-pan">
          <Channels gon={gon} />
        </div>
        <div className="col-9 right-pan">
          <UserNameContext.Provider value={userName}>
            <Form />
          </UserNameContext.Provider>
        </div>
      </div>
    </div>,
    rootEl,
  );
};
