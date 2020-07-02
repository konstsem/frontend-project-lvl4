import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Modal, FormGroup } from 'react-bootstrap';
import routes from '../routes';

const RemoveChannel = (props) => {
  const { modalContext, onHide } = props;
  const { context: { id } } = modalContext;
  const channelPath = routes.channelPath(id);
  const { t } = useTranslation('translation');
  const [errors, setErrors] = useState({ message: '' });
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(channelPath);
      setErrors({ message: '' });
      onHide();
    } catch (err) {
      setErrors({ message: `${t('error')}: ${err}, ${t('try again')}` });
      throw (err);
    }
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
          <input className="btn btn-primary" type="submit" value="Remove channel" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveChannel;
