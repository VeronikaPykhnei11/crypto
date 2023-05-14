import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { CandleChart } from '../CandleChart/CandleChart';
import { TableHeader } from '../../TableHeader/TableHeader';
import { PriceContent } from '../PriceContent/PriceContent';
import './styled.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { coinSymbolSelector } from '../../../../redux/selectors/coinDetailsSelectors';

const options = [
  { value: '1', label: 'USD (US Dollar)' },
  { value: '2', label: 'UAH (Ukrainian hryvnia)' },
  { value: '3', label: 'EUR (European Union)' }
];

export const CoinCandleChartTable = ({isFuture, coinLogo}) => {
  const coinSymbol = useSelector(coinSymbolSelector);
  const [cryptoData, setCryptoData] = useState([]);
  useEffect(async () => {
    axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${coinSymbol}`).then((response) => {
      const preprocessedData = [
        {
          label: 'Price',
          value: parseFloat(response.data.lastPrice).toFixed(8).replace(/\.?0+$/, ""),
        },
        {
          label: 'Price Change',
          value: parseFloat(response.data.priceChange).toFixed(8).replace(/\.?0+$/, ""),
        },
        {
          label: 'Price Change, %',
          value: parseFloat(response.data.priceChangePercent).toFixed(8).replace(/\.?0+$/, "")
        },
        {
          label: 'Volume (24h)',
          value: parseFloat(response.data.volume).toFixed(8).replace(/\.?0+$/, "")
        },
        ]
      setCryptoData(preprocessedData)
    })
  }, []);
  return (
    <>
      <div className="coin-chart-table-wrapper">
        <div className="card-header-wrapper">
          <div className={"card-header-icon-text-wrapper"}>
            <img src={coinLogo} />
            <TableHeader
              title={'Coin Candlestick Chart'}
              subtitle={
                'A type of price chart, where candlesticks are used to describe price action in a market during a given time frame.'
              }
            />
          </div>
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
          <PriceContent items={cryptoData} />
          <CandleChart isFuture={isFuture}/>
        </div>
      </div>
    </>
  );
};
