import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import cn from 'classnames';
import { setModal } from '../slices/modal';
import { setCurrentChannel } from '../slices/activeChannel';

const Channels = () => {
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.channels);
  const currentChannelId = useSelector((state) => state.currentChannelId);
  const currentChannelName = useSelector(
    (state) => _.find(state.channels, (item) => item.id === state.currentChannelId).name,
  );
  const handleCurrentChannel = (id) => (e) => {
    e.preventDefault();
    dispatch(setCurrentChannel(id));
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
        <button onClick={() => dispatch(setModal({ type: 'adding', context: null }))} type="button" className={cn({ ...buttonClasses, 'text-white': true })}>
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
