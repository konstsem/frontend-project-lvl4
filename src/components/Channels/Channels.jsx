import React from 'react';
import { connect } from 'react-redux';
// import React, { useContext } from 'react';
// import Context from '../context';
import cn from 'classnames';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const Channels = (props) => {
  // const { gon: { channels, currentChannelId } } = props;
  // const userName = useContext(Context);
  const { channels, currentChannelId } = props;

  const renderChannel = ({ id, name }) => {
    const shareClasses = {
      channel: true,
      container: true,
      'text-lowercase': true,
      current: id === currentChannelId,
      'text-white': id === currentChannelId,
    };
    return (
      <div className={cn(shareClasses)} key={id}><span>{`#  ${name}`}</span></div>
    );
  };

  return (
    <aside className="channels">
      <div className="channels__title">
        Channels
      </div>
      <div className="channels__wrapper d-flex flex-column">
        {channels.map(renderChannel)}
      </div>
    </aside>
  );
};

export default connect(mapStateToProps)(Channels);
