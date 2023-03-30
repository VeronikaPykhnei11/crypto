import React from 'react';
import { CoinDetailsRowList } from '../../../components/AdminPages/CoinDetailsRowList/CoinDetailsRowList';
import { CoinDetails as CoinDetailsRow } from '../../../components/AdminPages/CoinDetails';

export const CoinDetails = () => {
  return (
    <>
      <CoinDetailsRowList />
      <CoinDetailsRow />
    </>
  );
};
