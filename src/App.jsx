import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import UserNameContext from './context';
import Channels from './components/Channels/Channels';
import Main from './components/Main/Main';
import Modal from './components/Modal';
// import Form from './Form';
// import Messages from './Messages';


export default (store, userName) => {
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
