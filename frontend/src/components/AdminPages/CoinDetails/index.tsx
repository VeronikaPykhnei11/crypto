import React from 'react';
import { Link } from 'react-router-dom';
import { CoinCandleChartTable } from './CoinCandleChartTable/CoinCandleChartTable';
import { CoinDetailsInfo } from '../CoinDetailsInfo';
import CryptoIcon from '../../../assets/images/icons/mockCoinCrypto.svg';
import './styled.scss';

export const CoinDetails = () => {
  return (
    <div className="row">
      <div className="col-xl-9 col-xxl-9">
        <CoinCandleChartTable />
      </div>
      <div className="col-xl-3 col-xxl-3 col-sm-6">
        <div className="coin-details-card-wrapper">
          <div className="coin-details-header">
            <h4 className="coin-details-header-title">About</h4>
          </div>
          <CoinDetailsInfo
            icon={CryptoIcon}
            title={'Digital Cash'}
            coinName={'Bitcoin'}
            price={'43,474.50 USD'}
            infoText={
              'Bitcoin is a form of digital currency that aims to eliminate the need for central authorities such as banks or governments....'
            }
          />
          <div className="coin-details-footer">
            <Link to={'#'} className="coin-details-footer-button">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
