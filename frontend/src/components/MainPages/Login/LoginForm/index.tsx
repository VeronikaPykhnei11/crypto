import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Toast } from '../../../common/Toast/SuccessToast';
import { authService } from '../../../../services/AuthService';
import './styles.scss';
import { successSignIn, toggleAuthenticated } from '../../../../redux/actions/authActions';
import { toast } from 'react-toastify';

export const LoginForm = () => {
  const [isToastOpen, setToastOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //TODO: винести в окремі файли
  const showSuccessToastMessage = (message) => {
    toast.success(message);
  };
  const showErrorToastMessage = (message) => {
    toast.error(message);
  };

  const SignInSchema = Yup.object().shape(
    {
      email:Yup.string()
        .email('invalid email address')
        .required('Required'),
      password: Yup.string()
        .required('Password is required')
        .min(5, 'Your password is too short.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    }
  );
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => {
          authService.signIn(values).then(({status, message, firstName, lastName}) => {
            if (status === 200) {
              showSuccessToastMessage(message)
              navigate('/admin');
              dispatch(successSignIn(firstName, lastName));
              dispatch(toggleAuthenticated(true));
            } else {
              //TODO: змінити повернення з бекенду, на більш універсальне
              console.log(status, message)
              showErrorToastMessage(message)
            }
            setSubmitting(false)
          })
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
    </>
  );
};
