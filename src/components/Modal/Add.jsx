import React, { useEffect, useRef } from 'react';
import { useFormik, ErrorMessage } from 'formik';
import axios from 'axios';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';
import routes from '../../routes';

const Add = (props) => {
  const { onHide } = props;
  const channelsPath = routes.channelsPath();
  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    onSubmit: ({ channelName }, { setSubmitting, setErrors }) => {
      setSubmitting(true);
      axios.post(channelsPath, { data: { attributes: { name: channelName } } })
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
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl
              name="channelName"
              onChange={formik.handleChange}
              value={formik.values.channelName}
              ref={inputRef}
              disabled={formik.isSubmitting}
              requred="true"
            />
          </FormGroup>
          <input className="btn btn-primary" type="submit" value="Add" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Add;
