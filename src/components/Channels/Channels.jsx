import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../../actions';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const actionCreators = {
  setCurrentChannel: actions.setCurrentChannel,
};

const Channels = (props) => {
  const { channels, currentChannelId, setCurrentChannel } = props;

  const handleCurrentChannel = (id) => (e) => {
    e.preventDefault();
    setCurrentChannel(id);
  };

  const renderChannel = ({ id, name }) => {
    const shareClasses = {
      channel: true,
      container: true,
      'text-lowercase': true,
      current: id === currentChannelId,
      'text-white': id === currentChannelId,
    };
    return (
      <button type="button" onClick={handleCurrentChannel(id)} className={cn(shareClasses)} key={id}><span>{`#  ${name}`}</span></button>
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

export default connect(mapStateToProps, actionCreators)(Channels);
