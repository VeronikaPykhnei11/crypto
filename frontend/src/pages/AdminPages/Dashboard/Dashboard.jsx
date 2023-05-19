import React from 'react';
import { CryptoSlider } from '../../../components/AdminPages/CryptoSlider/CryptoSlider';
import { TopCryptoCard } from '../../../components/AdminPages/TopCryptoCard/TopCryptoCard';
import CryptoList from '../CryptoList/CryptoList';
import { SearchBar } from '../../../components/AdminPages/SearchBar/SearchBar';
import { CryptoTreeMap } from '../../../components/AdminPages/CryptoTreeMap';

const Dashboard = () => {
  return (
    <>
      <CryptoSlider />
      <TopCryptoCard />
      <div className={'row'}>
        <div className="col-xl-4 offset-8 p-10">
          <SearchBar />
        </div>
      </div>
      <CryptoList/>
    </>
  );
};

export default Dashboard;
