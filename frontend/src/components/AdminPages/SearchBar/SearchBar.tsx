import React from 'react';
import searchIcon from '../../../assets/images/icons/search.svg';
import './styled.scss';

export const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-icon-wrapper">
        <img src={searchIcon} />
      </div>
      <input type="text" className="search-input col-xl-10" placeholder="Search here..." />
    </div>
  );
};
