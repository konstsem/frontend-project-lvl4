import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import axios from 'axios';
import UserNameContext from '../context';
import routes from '../routes';

const NewMessageForm = () => {
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);
  const userName = useContext(UserNameContext);
  const messagesPath = routes.channelMessagesPath(currentChannelId);
  const handleSubmit = async ({ message }, { setSubmitting, resetForm, setErrors }) => {
    setSubmitting(true);
    try {
      await axios.post(messagesPath, { data: { attributes: { author: userName, text: message } } });
      resetForm();
      setSubmitting(false);
    } catch (e) {
      setErrors({ message: `Has been error: ${e}, try again, please` });
      setSubmitting(false);
      throw (e);
    }
  };
  return (
    <Formik
      initialValues={({ message: '' })}
      onSubmit={handleSubmit}
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

export default NewMessageForm;
