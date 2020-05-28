import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import cn from 'classnames';
import { setModal as setModalAction } from '../slices/modal';
import { setCurrentChannel as setCurrentChannelAction } from '../slices/activeChannel';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId,
    currentChannelName: _.find(state.channels, (item) => item.id === state.currentChannelId).name,
  };
  return props;
};

const actionCreators = {
  setCurrentChannel: setCurrentChannelAction,
  setModal: setModalAction,
};

const Channels = (props) => {
  const {
    channels,
    currentChannelId,
    currentChannelName,
    setCurrentChannel,
    setModal,
  } = props;

  const handleCurrentChannel = (id) => (e) => {
    e.preventDefault();
    setCurrentChannel(id);
  };

  const isRemovable = () => _.find(channels, (channel) => channel.id === currentChannelId)
    .removable;

  const renderChannel = ({ id, name }) => {
    const channelClasses = {
      container: true,
      'text-lowercase': true,
      'bg-aside': id !== currentChannelId,
      active: id === currentChannelId,
      'd-flex': true,
      'outline-none': true,
      'border-0': true,
      'text-white': true,
    };
    return (
      <button type="button" onClick={handleCurrentChannel(id)} className={cn(channelClasses)} key={id}>
        <span>{`#  ${name}`}</span>
      </button>
    );
  };
  const buttonClasses = {
    container: true,
    'bg-aside': true,
    'outline-none': true,
    'border-0': true,
  };
  const removableButtonClasses = {
    ...buttonClasses,
    'text-white': isRemovable(),
    'text-main': !isRemovable(),
  };

  return (
    <aside className="d-flex flex-column bg-aside text-main pt-1">
      <div>
        Channels
      </div>
      <div className="d-flex flex-column">
        {channels.map(renderChannel)}
      </div>
      <div className="mt-auto">
        <button onClick={() => setModal({ type: 'adding', context: null })} type="button" className={cn({ ...buttonClasses, 'text-white': true })}>
          <span>Add channel</span>
        </button>
        <button onClick={() => setModal({ type: 'renaming', context: { id: currentChannelId, currentChannelName } })} type="button" className={cn(removableButtonClasses)} disabled={!isRemovable()}>
          <span>Rename channel</span>
        </button>
        <button onClick={() => setModal({ type: 'removing', context: { id: currentChannelId } })} type="button" className={cn(removableButtonClasses)} disabled={!isRemovable()}>
          <span>Remove channel</span>
        </button>
      </div>
    </aside>
  );
};

export default connect(mapStateToProps, actionCreators)(Channels);
