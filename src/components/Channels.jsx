import React from 'react';
// import React, { useContext } from 'react';
// import Context from '../context';

const Channels = (props) => {
  const { gon: { channels } } = props;
  // const userName = useContext(Context);
  return (
    <div className="channels-group">
      {channels.map(({ id, name }) => <div className="channels-item" key={id}>{name}</div>)}
    </div>
  );
};

export default Channels;
