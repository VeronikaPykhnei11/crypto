import React from 'react';
import { CoinDetailsRowList } from '../../../components/AdminPages/CoinDetailsRowList/CoinDetailsRowList';
import { CoinDetails as CoinDetailsRow } from '../../../components/AdminPages/CoinDetails';

const FuturePrice = () => {
  return (
    <>
      <CoinDetailsRowList />
      <CoinDetailsRow isFuture={true} />
    </>
  );
};


export default FuturePrice;