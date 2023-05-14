import { combineReducers } from 'redux';
import { sideBarReducer } from './sideBarReducer';
import { activePageReducer } from './activePageReducer';
import { authReducer } from './AuthReducer';
import { coinDetailsReducer } from './coinDetailsReducer';
import { confirmationModalReducer } from './confirmationModalReducer';

export const rootReducers = combineReducers({
	sideBarReducer,
	activePageReducer,
	authReducer,
	coinDetailsReducer,
	confirmationModalReducer,
})