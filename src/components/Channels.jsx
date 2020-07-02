import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import cn from 'classnames';
import { setModal } from '../slices/modal';
import { setCurrentChannel } from '../slices/channels';

const Channels = () => {
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.channels.listChannels);
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);
  const currentChannelName = useSelector(
    (state) => _.find(
      state.channels.listChannels, (item) => item.id === state.channels.currentChannelId,
    ).name,
  );
  const handleCurrentChannel = (id) => (e) => {
    e.preventDefault();
    dispatch(setCurrentChannel(id));
  };

  const isRemovable = () => _.find(channels, (channel) => channel.id === currentChannelId)
    .removable;

  const renderChannel = ({ id, name }) => {
    const channelClasses = {
      btn: true,
      'text-lowercase': true,
      'mb-1': true,
      'btn-secondary': id !== currentChannelId,
      'btn-primary': id === currentChannelId,
    };
    return (
      <button type="button" onClick={handleCurrentChannel(id)} className={cn(channelClasses)} key={id}>
        <span>{`#  ${name}`}</span>
      </button>
    );
  };
  const buttonClasses = {
    container: true,
    btn: true,
    'mb-1': true,
  };
  const removableButtonClasses = {
    ...buttonClasses,
    'text-light': !isRemovable(),
    'btn-light': !isRemovable(),
    'btn-secondary': isRemovable(),
  };
  // 'text-dark': isRemovable(),
  // 'text-light': !isRemovable(),

  return (
    <aside className="d-flex flex-column pt-1">
      <h4>
        Channels
      </h4>
      <div className="d-flex flex-column">
        {channels.map(renderChannel)}
      </div>
      <div className="mt-auto btn-group">
        <button onClick={() => dispatch(setModal({ type: 'adding', context: null }))} type="button" className={cn({ ...buttonClasses, 'btn-secondary': true })}>
          <span>Add channel</span>
        </button>
        <button onClick={() => dispatch(setModal({ type: 'renaming', context: { id: currentChannelId, currentChannelName } }))} type="button" className={cn(removableButtonClasses)} disabled={!isRemovable()}>
          <span>Rename channel</span>
        </button>
        <button onClick={() => dispatch(setModal({ type: 'removing', context: { id: currentChannelId } }))} type="button" className={cn(removableButtonClasses)} disabled={!isRemovable()}>
          <span>Remove channel</span>
        </button>
      </div>
    </aside>
  );
};

export default Channels;
