import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { confirmationModalIsOpenSelector } from '../../../redux/selectors/confirmationModalSelectors';
import { setModalOpen } from '../../../redux/actions/confirmationModalActions';
import { authService } from '../../../services/AuthService';
import './style.scss';

export const ConfirmationModal = () => {
  const isModalOpen = useSelector(confirmationModalIsOpenSelector);
  const dispatch = useDispatch();
  return (
      <Modal show={isModalOpen} onHide={() => setModalOpen(false)} centered={true} >
        <Modal.Header>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to log out?</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => dispatch(setModalOpen(false))} className={"confirmation-modal-cancel-button"}>
            Cancel
          </button>
          <button
            onClick={() => {
              authService.signOut();
              dispatch(setModalOpen(false))
            }}
            className={"confirmation-modal-confirm-button"}
          >
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
  );
}