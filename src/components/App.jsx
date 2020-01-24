import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import Channels from './Channels';

export default (gon, userName) => {
  console.log(userName);
  const rootEl = document.getElementById('chat');
  render(
    <div>
      <Channels gon={gon} />
    </div>,
    rootEl,
  );
};
