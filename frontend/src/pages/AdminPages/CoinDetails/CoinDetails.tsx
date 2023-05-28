import React from 'react';
import { CoinDetailsRowList } from '../../../components/AdminPages/CoinDetailsRowList/CoinDetailsRowList';
import { CoinDetails as CoinDetailsRow } from '../../../components/AdminPages/CoinDetails';

const CoinDetails = () => {
  return (
    <>
      <CoinDetailsRowList />
      <CoinDetailsRow isFuture={false} />
    </>
  );
};

export default CoinDetails;
