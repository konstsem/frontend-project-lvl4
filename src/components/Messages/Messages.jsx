import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages,
  };
  return props;
};

const Messages = (props) => {
  const { messages } = props;
  return messages.length ? (
    <div className="messages">
      {messages.map(({ id, text, author }) => (
        <div className="message" key={`${author}-${id}`}>
          <div className="message__main">
            <div className="message__author-name">{author}</div>
            <p className="message__text">{text}</p>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default connect(mapStateToProps)(Messages);
