import React from 'react';
import LeftArrowPaginationIcon from '../../../assets/images/icons/double-angle-left.svg';
import RightArrowPaginationIcon from '../../../assets/images/icons/double-angle-right.svg';
import { PaginationProps } from './types';
import './styled.scss';

export const Pagination: React.FC<PaginationProps> = ({currentPage, lastPage, handleNextPage, handlePrevPage}) => {
  return (
    <div className="pagination-wrapper">
      <div className="pagination-info">Showing {currentPage} to {lastPage} of entries</div>
      <div className="pagination-button-group">
        <button className={'pagination-button'} onClick={handlePrevPage}>
          <img src={LeftArrowPaginationIcon} className={'pagination-icon'} />
        </button>
        <div className={'pagination-page-number'}>{currentPage}</div>
        <button className={'pagination-button'} onClick={handleNextPage}>
          <img src={RightArrowPaginationIcon} className={'pagination-icon'} />
        </button>
      </div>
    </div>
  );
};
