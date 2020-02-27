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
      setTimeout(() => {
        // console.log(values.message);
        setSubmitting(false);
      }, 500);
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

export default NewMessageForm;
