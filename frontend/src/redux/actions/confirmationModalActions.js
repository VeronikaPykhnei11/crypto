import { createAction } from '@reduxjs/toolkit';

export const setModalOpen = createAction('SET_MODAL_OPEN', (isOpen) => ({
  payload: { isOpen }
}));