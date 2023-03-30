import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import './styles.scss';
import { SuccessToast } from '../../../common/Toast';
// import { useDispatch } from 'react-redux';
// import { loadingToggleAction, loginAction } from '../../../store/actions/AuthActions';

export const LoginForm = () => {
  const [isToastOpen, setToastOpen] = useState(false);
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {} as any;
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setToastOpen(true);
            setSubmitting(false);
          }, 400);
        }}>
        {({ isSubmitting }) => (
          <Form className="login-form">
            <div className="field-wrapper">
              <Field
                type="email"
                name="email"
                className="login-field-input"
                placeholder="Email Address"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="field-wrapper">
              <Field
                type="password"
                name="password"
                className="login-field-input"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <div className={'submit-section-wrapper'}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary dz-xs-flex m-r5">
                Submit
              </button>
              <Link to={'#'} className="">
                Forgot Password?
              </Link>
            </div>
          </Form>
        )}
      </Formik>
      <SuccessToast isOpen={isToastOpen} onClose={() => setToastOpen(false)} />
    </>
  );
};
