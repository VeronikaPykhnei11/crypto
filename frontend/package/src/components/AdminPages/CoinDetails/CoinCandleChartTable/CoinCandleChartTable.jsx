import React from 'react';
import Select from 'react-select';
import { CandleChart } from '../CandleChart/CandleChart';
import { TableHeader } from '../../TableHeader/TableHeader';
import './styled.scss';
import { PriceContent } from '../PriceContent/PriceContent';

const options = [
  { value: '1', label: 'USD ($ US Dollar)' },
  { value: '2', label: 'BTC ($ US Dollar)' },
  { value: '3', label: 'USD ($ US Dollar)' }
];

const priceContentItems = [
  {
    label: 'Price',
    value: '$9,542.39'
  },
  {
    label: '24h% change',
    value: '1.64%'
  },
  {
    label: 'Volume (24h)',
    value: '$47.22B'
  },
  {
    label: 'Market Cap',
    value: '$219.24B'
  }
];

export const CoinCandleChartTable = () => {
  return (
    <>
      <div className="card coin-chart-table-wrapper">
        <div className="card-header-wrapper">
          <TableHeader
            title={'Coin Candlestick Chart'}
            subtitle={
              'A type of price chart, where candlesticks are used to describe price action in a market during a given time frame.'
            }
          />
          <div className="currency-select-wrapper">
            <Select
              className="custom-react-select mb-xl-0 mb-3"
              options={options}
              defaultValue={options[0]}
              isSearchable={false}
            />
          </div>
        </div>
        <div className="card-body">
          <PriceContent items={priceContentItems} />
          <CandleChart />
        </div>
      </div>
    </>
  );
};
