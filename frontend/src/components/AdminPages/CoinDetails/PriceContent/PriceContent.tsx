import React from 'react';
import { PriceContentProps } from './types';
import './styled.scss';

export const PriceContent: React.FC<PriceContentProps> = ({ items }) => {
  return (
    <div className="price-content-wrapper">
      {items.map(({ label, value }) => {
        return (
          <div className="price-content-item">
            <span className="price-content-label">{label}</span>
            <h4 className="price-content-value">{value}</h4>
          </div>
        );
      })}
    </div>
  );
};
