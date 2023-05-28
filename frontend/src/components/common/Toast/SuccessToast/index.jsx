import React from 'react';
import { ToastContainer } from 'react-toastify';
import { RootPortal } from '../../RootPortal';

export const Toast = () => (
    <ToastContainer
      position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
);
