import { createAction } from '@reduxjs/toolkit';

export const setCoinSymbol = createAction('SET_COIN_SYMBOL', (symbol) => ({
  payload: { symbol }
}));
