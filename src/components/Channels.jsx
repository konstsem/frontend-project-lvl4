import React from 'react';

const Channels = (props) => {
  const { gon: { channels } } = props;
  return (
    <div className="channels-group">
      {channels.map(({ id, name }) => <div className="channels-item" key={id}>{name}</div>)}
    </div>
  );
};

export default Channels;
