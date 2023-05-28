import React, { useState } from 'react';
import { CryptoSlider } from '../../../components/AdminPages/CryptoSlider/CryptoSlider';
import { TopCryptoCard } from '../../../components/AdminPages/TopCryptoCard/TopCryptoCard';
import CryptoList from '../CryptoList/CryptoList';
import { SearchBar } from '../../../components/AdminPages/SearchBar/SearchBar';
import { CryptoTreeMap } from '../../../components/AdminPages/CryptoTreeMap';

const Dashboard = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <CryptoSlider />
      <TopCryptoCard />
      <div className={'row'}>
        <div className="col-xl-4 offset-8 p-10">
          <SearchBar
            searchQuery={searchText}
            handleChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
      </div>
      <CryptoList searchText={searchText} />
    </>
  );
};

export default Dashboard;
