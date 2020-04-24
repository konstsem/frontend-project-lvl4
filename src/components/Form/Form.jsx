import React, { useContext } from 'react';
import { connect } from 'react-redux';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import axios from 'axios';
import UserNameContext from '../../context';
import routes from '../../routes';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const NewMessageForm = ({ currentChannelId }) => {
  const userName = useContext(UserNameContext);
  const messagesPath = routes.channelMessagesPath(currentChannelId);
  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={({ message }, { setSubmitting, resetForm, setErrors }) => {
        // send message to server
        setSubmitting(true);
        axios.post(messagesPath, { data: { attributes: { author: userName, text: message } } })
          .then(() => {
            setSubmitting(false);
            resetForm();
          })
          .catch((err) => {
            setErrors({ message: `Has been error: ${err}, try again, please` });
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <ErrorMessage name="message" component="div" className="alert alert-warning" role="alert" />
          <Field className="container-fluid" type="text" name="message" autoFocus disabled={isSubmitting} required />
        </Form>
      )}
    </Formik>
  );
};

export default connect(mapStateToProps)(NewMessageForm);
