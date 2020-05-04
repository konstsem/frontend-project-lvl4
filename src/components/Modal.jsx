import React from 'react';
import { connect } from 'react-redux';
import Add from './Add.jsx';
import Remove from './Remove.jsx';
import Rename from './Rename.jsx';
import * as actions from '../actions';

const modals = {
  adding: Add,
  removing: Remove,
  renaming: Rename,
};

const getModal = (type) => modals[type];

const mapStateToProps = (state) => {
  const props = {
    modal: state.modal,
  };
  return props;
};

const actionCreators = {
  setModal: actions.setModal,
  hideModal: actions.hideModal,
};

const Modal = (props) => {
  const { modal, hideModal } = props;
  // const handleHide = () => setModal({ type: null, context: null });
  // const showModal = (type, context = null) => setModal({ type, context });

  const renderModal = (modalContext, handleHide) => {
    if (modalContext.type === null) return null;

    const ModalComponent = getModal(modalContext.type);
    return (<ModalComponent modalContext={modalContext} onHide={handleHide} />);
  };
  return (
    <>
      {renderModal(modal, hideModal)}
    </>
  );
};

export default connect(mapStateToProps, actionCreators)(Modal);
