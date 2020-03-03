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
      onSubmit={({ message }, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 5000);
        // send message to server
        axios.post(messagesPath, { data: { attributes: { author: userName, text: message } } })
          .then(resetForm())
          .catch((err) => console.error(err));
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <Field className="container-fluid" type="text" name="message" />
          <button className="collapse" type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <ErrorMessage name="message" component="div" />
        </Form>
      )}
    </Formik>
  );
};

export default connect(mapStateToProps)(NewMessageForm);
