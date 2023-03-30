import React from 'react';
import Toast from 'react-bootstrap/Toast';
import { RootPortal } from '../../RootPortal';

export const SuccessToast = ({ isOpen, onClose }: any) => {
  return (
    <RootPortal>
      <Toast show={isOpen} onClose={onClose}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>
    </RootPortal>
  );
};
