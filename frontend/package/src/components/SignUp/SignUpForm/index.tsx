import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import './styles.scss';
// import { useDispatch } from 'react-redux';
// import { loadingToggleAction, loginAction } from '../../../store/actions/AuthActions';

export const SignUpForm = () => {
  // const [email, setEmail] = useState('demo@example.com');
  // let errorsObj = { email: '', password: '' };
  // const [errors, setErrors] = useState(errorsObj);
  // const [password, setPassword] = useState('123456');
  // const dispatch = useDispatch();
  //
  // function onLogin(e) {
  //   e.preventDefault();
  //   let error = false;
  //   const errorObj = { ...errorsObj };
  //   if (email === '') {
  //     errorObj.email = 'Email is Required';
  //     error = true;
  //   }
  //   if (password === '') {
  //     errorObj.password = 'Password is Required';
  //     error = true;
  //   }
  //   setErrors(errorObj);
  //   if (error) {
  //     return;
  //   }
  //
  //   dispatch(loadingToggleAction(true));
  //   dispatch(loginAction(email, password, navigate));
  // }
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validate={(values) => {
        const errors = {} as any;
        if (!values.email) {
          errors.email = 'Required';
        }
        if (!values.firstName) {
          errors.firstName = 'Required';
        }
        if (!values.lastName) {
          errors.lastName = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      {({ isSubmitting }) => (
        <Form className="login-form">
          <div className="field-username-wrapper">
            <div className="username-wrapper">
              <Field
                type="text"
                name="firstName"
                className="login-field-input"
                placeholder="First Name"
              />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div className="username-wrapper">
              <Field
                type="text"
                name="lastName"
                className="login-field-input"
                placeholder="Last Name"
              />
              <ErrorMessage name="lastName" component="div" />
            </div>
          </div>
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
          <div className="field-wrapper">
            <Field
              type="password"
              name="password"
              className="login-field-input"
              placeholder="Confirm Password"
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
  );
};
