import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddChannel from './AddChannel.jsx';
import RemoveChannel from './RemoveChannel.jsx';
import RenameChannel from './RenameChannel.jsx';
import { hideModal } from '../slices/modal';

const modals = {
  adding: AddChannel,
  removing: RemoveChannel,
  renaming: RenameChannel,
};

const getModal = (type) => modals[type];

const Modal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const renderModal = (modalContext, handleHide) => {
    if (modalContext.type === null) return null;

    const ModalComponent = getModal(modalContext.type);
    return (<ModalComponent modalContext={modalContext} onHide={handleHide} />);
  };
  return (
    <>
      {renderModal(modal, () => dispatch(hideModal()))}
    </>
  );
};

export default Modal;
