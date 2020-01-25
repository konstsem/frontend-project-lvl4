import React from 'react';
import {
  Formik,
  Form as F,
  Field,
  ErrorMessage,
} from 'formik';

const Form = () => (
  <Formik
    initialValues={{ message: '' }}
    onSubmit={(values, { setSubmitting }) => {
      console.log(values.message);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <F>
        <Field type="text" name="message" />
        <ErrorMessage name="message" component="div" />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </F>
    )}
  </Formik>
);

export default Form;
