import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { setCoinSymbol } from '../../../redux/actions/coinDetailsActions';
import { Pagination } from '../../../components/AdminPages/Pagination/Pagination';
import axios from 'axios';

const TechIndicatorsTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post('https://api.taapi.io/bulk', {
        secret:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjQ2YTIwMmY0OThkNzVkYTM2YzhkZjBhIiwiaWF0IjoxNjg0Njc2NjU1LCJleHAiOjMzMTg5MTQwNjU1fQ.nsDwl6_xIEszTZZVl2xotQhJYrk0XeaUiZoHuh8IAnM',
        construct: {
          exchange: 'binance',
          symbol: 'BTC/USDT',
          interval: '1h',
          indicators: [
            {
              // Relative Strength Index
              id: 'rsi',
              indicator: 'rsi'
            },
            {
              // Chaikin Money Flow
              id: 'cci',
              indicator: 'cci',
              period: 20 // Override the default 14
            },
            {
              // MACD Backtracked 1
              id: 'adx',
              indicator: 'adx'
            },
            {
              // MACD Backtracked 1
              id: 'mom',
              indicator: 'mom',
              period: 10
            },
            {
              // MACD Backtracked 1
              id: 'macd',
              indicator: 'macd'
            },
            {
              // MACD Backtracked 1
              id: 'stochrsi',
              indicator: 'stochrsi'
            },
            {
              // MACD Backtracked 1
              id: 'willr',
              indicator: 'willr'
            },
            {
              // MACD Backtracked 1
              id: 'ao',
              indicator: 'ao'
            }
          ]
        }
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="coin-details-card-wrapper">
      <div className="coin-details-header">
        <h4 className="coin-details-header-title">Oscillators</h4>
      </div>
      <div className="table-responsive dataTablemarket">
        <div id="market_wrapper" className="dataTables_wrapper no-footer">
          <table className="table dataTable  shadow-hover display" style={{ minWidth: '545px' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th className="text-center">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Relative Strength Index (14)</td>
                <td className="text-center">
                  {data.length ? data[0].result.value.toFixed(2) : '-'}
                </td>
              </tr>
              <tr>
                <td>Stochastic %K (14, 3, 3)</td>
                <td className="text-center">
                  {data.length ? data[5].result.valueFastK.toFixed(2) : '-'}
                </td>
              </tr>
              <tr>
                <td>Commodity Channel Index (20)</td>
                <td className="text-center">
                  {data.length ? data[1].result.value.toFixed(2) : '-'}
                </td>
              </tr>
              <tr>
                <td>Average Directional Index (14)</td>
                <td className="text-center">
                  {data.length ? data[2].result.value.toFixed(2) : '-'}
                </td>
              </tr>
              <tr>
                <td>Awesome Oscillator</td>
                <td className="text-center">
                  {data.length ? data[7].result.value.toFixed(2) : '-'}
                </td>
              </tr>
              <tr>
                <td>Momentum (10)</td>
                <td className="text-center">
                  {data.length ? data[3].result.value.toFixed(2) : '-'}
                </td>
              </tr>
              <tr>
                <td>MACD Level (12, 26)</td>
                <td className="text-center">
                  {data.length ? data[4].result.valueMACD.toFixed(2) : '-'}
                </td>
              </tr>
              <tr>
                <td>Williams Percent Range (14)</td>
                <td className="text-center">
                  {data.length ? data[6].result.value.toFixed(2) : '-'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TechIndicatorsTable;
