import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';
import routes from '../../routes';

const Rename = (props) => {
  const { modalContext, onHide } = props;
  const { context: { id, currentChannelName } } = modalContext;
  const channelPath = routes.channelPath(id);

  const formik = useFormik({
    initialValues: {
      channelName: currentChannelName,
    },
    onSubmit: ({ channelName }, { setSubmitting, setErrors }) => {
      setSubmitting(true);
      axios.patch(channelPath, { data: { attributes: { name: channelName } } })
        .then(() => {
          setSubmitting(false);
          onHide();
        })
        .catch((err) => {
          setErrors({ message: `Has been error: ${err}, try again, please` });
          setSubmitting(false);
        });
    },
  });

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Rename channel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {formik.errors.message && <div className="alert alert-warning">{formik.errors.message}</div>}
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl
              name="channelName"
              placeholder="Enter channel name"
              onChange={formik.handleChange}
              value={formik.values.channelName}
              ref={inputRef}
              disabled={formik.isSubmitting}
              requred="true"
            />
          </FormGroup>
          <input className="btn btn-primary" type="submit" value="Rename" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Rename;
