import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';
import routes from '../routes';

const AddChannel = (props) => {
  const { onHide } = props;
  const channelsPath = routes.channelsPath();
  const { t } = useTranslation('translation');
  const handleSubmit = async ({ channelName }, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    try {
      await axios.post(channelsPath, { data: { attributes: { name: channelName } } });
      setSubmitting(false);
      onHide();
    } catch (e) {
      setErrors({ message: `${t('error')}: ${e}, ${t('try again')}` });
      setSubmitting(false);
      throw (e);
    }
  };
  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    onSubmit: handleSubmit,
  });

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add new channel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {formik.errors.message && <div className="alert alert-warning">{formik.errors.message}</div>}
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl
              name="channelName"
              placeholder="Enter new channel name"
              onChange={formik.handleChange}
              value={formik.values.channelName}
              ref={inputRef}
              disabled={formik.isSubmitting}
              requred="true"
            />
          </FormGroup>
          <input className="btn btn-primary" type="submit" value="Add channel" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddChannel;
