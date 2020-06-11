import React from 'react';
import NewMessageForm from './NewMessageForm';
import Messages from './Messages';

const Main = () => (
  <main className="container-fluid d-flex flex-column justify-content-between pb-1">
    <div className="overflow-auto d-flex flex-column-reverse">
      <Messages />
    </div>
    <footer>
      <NewMessageForm />
    </footer>
  </main>
);

export default Main;
