import { createAction } from '@reduxjs/toolkit';

export const toggleAuthenticated = createAction('TOGGLE_AUTHENTICATED', (isAuthenticated) => ({
  payload: { isAuthenticated }
}));

export const successSignIn = createAction('SUCCESS_SIGN_IN', (firstName, lastName) => ({
  payload: { firstName, lastName }
}));

export const successSignUp = createAction('SUCCESS_SIGN_UP', (isOpen) => ({
  payload: { isOpen }
}));