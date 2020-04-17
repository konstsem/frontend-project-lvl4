import React from 'react';
import axios from 'axios';
import { Modal, FormGroup } from 'react-bootstrap';
import routes from '../../routes';

const Remove = (props) => {
  const { modalContext, onHide } = props;
  const { context: { id } } = modalContext;
  const channelPath = routes.channelPath(id);
  const onSubmit = (e) => {
    e.preventDefault();
    axios.delete(channelPath)
      .then(() => onHide())
      .catch((err) => console.error(err));
    // I need delete all messages of current channel
  };

  return (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Remove</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <FormGroup />
          <input className="btn btn-primary" type="submit" value="Remove" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Remove;
