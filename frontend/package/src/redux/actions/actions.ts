import { createAction } from '@reduxjs/toolkit';

export const setActivePageTitle = createAction('SET_ACTIVE_PAGE_TITLE', (title: string) => ({
  payload: { title }
}));

export const toggleSideBar = createAction('TOGGLE_SIDEBAR', (isOpen: boolean) => ({
  payload: { isOpen }
}));
