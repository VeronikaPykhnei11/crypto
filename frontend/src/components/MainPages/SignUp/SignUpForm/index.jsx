import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import './styles.scss';
import { authService } from '../../../../services/AuthService';

export const SignUpForm = () => {
  const navigate = useNavigate();

  //TODO: винести в окремі файли
  const showSuccessToastMessage = (message) => {
    toast.success(message);
  };
  const showErrorToastMessage = (message) => {
    toast.error(message);
  };
  const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Should be 5 character long')
      .max(15, 'should not exceed 15 characters')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Should be 5 character long')
      .max(15, 'should not exceed 15 characters')
      .required('Required'),
    email: Yup.string().email('invalid email address').required('Required'),
    password: Yup.string()
      .required('Password is required')
      .min(5, 'Your password is too short.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  });
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting }) => {
          let { message, status } = await authService.signUp(values);
          console.log(status, message);
          setSubmitting(false);
          if (status === 200) {
            showSuccessToastMessage(message);
            navigate('/login');
          } else {
            //TODO: змінити повернення з бекенду, на більш універсальне
            console.log(status, message);
            showErrorToastMessage(message);
          }
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
                name="confirmPassword"
                className="login-field-input"
                placeholder="Confirm Password"
              />
              <ErrorMessage name="confirmPassword" component="div" />
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
    </>
  );
};
