import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ messages, currentChannelId }) => {
  const props = {
    messages: messages.filter((message) => message.channelId === currentChannelId),
  };
  return props;
};

const Messages = (props) => {
  const { messages } = props;
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

export default connect(mapStateToProps)(Messages);
