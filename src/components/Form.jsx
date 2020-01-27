import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';

const NewMessageForm = () => (
  <Formik
    initialValues={{ message: '' }}
    onSubmit={(values, { setSubmitting }) => {
      console.log(values.message);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type="text" name="message" />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <ErrorMessage name="message" component="div" />
      </Form>
    )}
  </Formik>
);

export default NewMessageForm;
