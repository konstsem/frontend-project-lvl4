import React from 'react';
import { useSelector } from 'react-redux';

const Messages = () => {
  const messages = useSelector(
    (state) => state.messages.filter((message) => message.channelId === state.currentChannelId),
  );
  return messages.length ? (
    <div>
      {messages.map(({ id, text, author }) => (
        <div key={`${author}-${id}`}>
          <div>
            <div><b>{author}</b></div>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default Messages;
