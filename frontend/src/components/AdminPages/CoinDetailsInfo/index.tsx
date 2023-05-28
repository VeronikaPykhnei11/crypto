import React from 'react';
import { CoinDetailsInfoProps } from './types';
import './styled.scss';

export const CoinDetailsInfo: React.FC<CoinDetailsInfoProps> = ({
  icon,
  title,
  coinName,
  price,
  infoText
}) => {
  return (
    <div className="coin-details-info-content">
      <img src={icon} className={'coin-details-coin-icon'} />
      <h4 className="coin-details-info-title">{title}</h4>
      <div className="coin-details-info-subtitle">{coinName}</div>
      <p className="coin-details-info-text">{infoText}</p>
    </div>
  );
};
