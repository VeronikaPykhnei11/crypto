import React from 'react';
import { PriceListProps } from './types';

export const PriceList: React.FC<PriceListProps> = ({ priceList }) => {
  return (
    <>
      <ul className="pricingtable-features">
        {priceList.map((item) => {
          return (
            <li>
              <img src={item.icon} alt="" />
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
