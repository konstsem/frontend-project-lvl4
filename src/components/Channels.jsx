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
      'nav-link': true,
      'channels-item': true,
      active: id === currentChannelId,
    };
    return (
      <div className={cn(shareClasses)} key={id}>{`#  ${name}`}</div>
    );
  };

  return (
    <div className="nav nav-pills flex-column channels-group">
      {channels.map(renderChannel)}
    </div>
  );
};

export default connect(mapStateToProps)(Channels);
