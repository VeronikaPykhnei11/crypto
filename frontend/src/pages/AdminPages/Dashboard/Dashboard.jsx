import React from 'react';
import { CryptoSlider } from '../../../components/AdminPages/CryptoSlider/CryptoSlider';
import { TopCryptoCard } from '../../../components/AdminPages/TopCryptoCard/TopCryptoCard';

export const Dashboard = () => {
  return (
    <>
      <CryptoSlider />
      <TopCryptoCard />
    </>
  );
};
