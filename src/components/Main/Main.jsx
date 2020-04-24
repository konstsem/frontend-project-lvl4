import React from 'react';
import Form from '../Form/Form';
import Messages from '../Messages/Messages';

const Main = () => (
  <main className="main container-fluid container-fluid d-flex flex-column justify-content-between">
    <div className="main__wrapper overflow-auto d-flex flex-column-reverse">
      <Messages />
    </div>
    <footer>
      <Form />
    </footer>
  </main>
);

export default Main;
