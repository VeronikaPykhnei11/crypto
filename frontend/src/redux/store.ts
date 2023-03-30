import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { AuthReducer } from './reducers/AuthReducer';
import { activePageReducer, sideBarReducer } from './reducers/reducers';

export interface PageState {
  activePageTitle: string;
  isSideBarOpen: boolean;
}

const rootReducer = combineReducers({
  auth: AuthReducer,
  activePage: activePageReducer,
  menuSideBar: sideBarReducer
});

const middleware = [thunk];

export const store = configureStore({
  reducer: rootReducer,
  middleware
});
