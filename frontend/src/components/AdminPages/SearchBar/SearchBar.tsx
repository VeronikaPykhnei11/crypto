import React from 'react';
import searchIcon from '../../../assets/images/icons/search.svg';
import './styled.scss';
import { SearchBarPropsType } from './types';

export const SearchBar: React.FC<SearchBarPropsType> = ({ searchQuery, handleChange }) => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-icon-wrapper">
        <img src={searchIcon} />
      </div>
      <input
        type="text"
        className="search-input col-xl-10"
        placeholder="Search here..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};
