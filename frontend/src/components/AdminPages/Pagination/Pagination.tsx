import React from 'react';
import LeftArrowPaginationIcon from '../../../assets/images/icons/double-angle-left.svg';
import RightArrowPaginationIcon from '../../../assets/images/icons/double-angle-right.svg';
import './styled.scss';

export const Pagination = () => {
  return (
    <div className="pagination-wrapper">
      <div className="pagination-info">Showing 1 to 6 of entries</div>
      <div className="pagination-button-group">
        <button className={'pagination-button'}>
          <img src={LeftArrowPaginationIcon} className={'pagination-icon'} />
        </button>
        <div className={'pagination-page-number'}>1</div>
        <button className={'pagination-button'}>
          <img src={RightArrowPaginationIcon} className={'pagination-icon'} />
        </button>
      </div>
    </div>
  );
};
