import React from 'react';
import Form from './Form';
import Messages from './Messages';

const Main = () => (
  <main className="container-fluid d-flex flex-column justify-content-between">
    <div className="overflow-auto d-flex flex-column-reverse">
      <Messages />
    </div>
    <footer>
      <Form />
    </footer>
  </main>
);

export default Main;
