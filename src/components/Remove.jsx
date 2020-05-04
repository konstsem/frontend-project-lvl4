import React, { useState } from 'react';
import axios from 'axios';
import { Modal, FormGroup } from 'react-bootstrap';
import routes from '../routes';

const Remove = (props) => {
  const { modalContext, onHide } = props;
  const { context: { id } } = modalContext;
  const channelPath = routes.channelPath(id);
  const [errors, setErrors] = useState({ message: '' });
  const onSubmit = (e) => {
    e.preventDefault();
    axios.delete(channelPath)
      .then(() => {
        setErrors({ message: '' });
        onHide();
      })
      .catch((err) => {
        setErrors({ message: `Has been error: ${err}, try again, please` });
      });
    // I need delete all messages of current channel
  };

  const renderAlert = () => {
    if (errors.message === '') return null;
    const { message } = errors;
    return (
      <div className="alert alert-warning">{message}</div>
    );
  };

  return (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Remove channel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {renderAlert()}
        <form onSubmit={onSubmit}>
          <div>Are you sure that you want remove the channel?</div>
          <FormGroup />
          <input className="btn btn-primary" type="submit" value="Remove" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Remove;
