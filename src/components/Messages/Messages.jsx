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
    <ul>
      {messages.map(({ id, text, author }) => (
        <li key={`${author}-${id}`}>
          <div>
            {author}
          </div>
          <div>
            {text}
          </div>
        </li>
      ))}
    </ul>
  ) : null;
};

export default connect(mapStateToProps)(Messages);
