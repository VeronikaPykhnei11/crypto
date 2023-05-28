import React, { useEffect, useState, useMemo, useTransition } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ReactSVG } from 'react-svg';
import './styled.scss';
import { SearchBar } from '../../../components/AdminPages/SearchBar/SearchBar';
import { Pagination } from '../../../components/AdminPages/Pagination/Pagination';
import btc from '../../../assets/icons/color/btc.svg';
import axios from 'axios';
import { Icon } from '../../../helpers';
import { setCoinSymbol } from '../../../redux/actions/coinDetailsActions';

function nFormatter(num, digits = 2) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : 'N/A';
}

const CryptoList = ({ searchText }) => {
  const dispatch = useDispatch();
  const [cryptoData, setCryptoData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPageNumber, setLastPageNumber] = useState();

  const limit = 11;
  const start = (currentPage - 1) * limit + 1;

  const indexOfLastPost = currentPage * limit;
  const indexOfFirstPost = indexOfLastPost - limit;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const currentPageCurrencies = Object.values(cryptoData)
    .filter((coin) => {
      return coin.s.includes('USDT') && coin.s.toLowerCase().includes(searchText);
    })
    .slice(indexOfFirstPost, indexOfLastPost);

  useEffect(async () => {
    const socket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

    socket.onopen = () => {
      console.log('Connected to Binance WebSocket');
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const updatedData = {};

      message.forEach((item) => {
        updatedData[item.s] = item;
      });

      setCryptoData((prevData) => {
        return { ...prevData, ...updatedData };
      });
      setLastPageNumber(updatedData.status);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <>
      <div className={'row'}>
        <div className="col-xl-12">
          <div className="card table-wrapper">
            <div className="card-body pt-3">
              <div className="table-responsive dataTablemarket">
                <div id="market_wrapper" className="dataTables_wrapper no-footer">
                  <table
                    className="table dataTable  shadow-hover display"
                    style={{ minWidth: '845px' }}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Price Change</th>
                        <th className="text-center">Price Change, %</th>
                        <th className="text-center">24 Volume</th>
                        <th className="text-center">Number of trades</th>
                        <th className="text-end">Market Cap</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentPageCurrencies.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <Link
                              to={'/admin/coin-details'}
                              onClick={() => dispatch(setCoinSymbol(item.s))}
                              className="market-title d-flex align-items-center">
                              {/*<div*/}
                              {/*  className={'market-icon'}>*/}

                              {/*</div>*/}
                              {/*<h6 className="mb-0 ms-2"></h6>*/}
                              <span className="crypto-second-title ms-2">
                                {item.s.replace('USDT', '')}
                              </span>
                            </Link>
                          </td>
                          <td className="text-center">
                            {parseFloat(item.c)
                              .toFixed(2)
                              .replace(/\.?0+$/, '')}
                            $
                          </td>
                          <td
                            className={`${
                              item.p < 0 ? 'text-danger' : item.p == 0 ? '' : 'text-success'
                            } text-center`}>
                            {parseFloat(item.p, 2).toFixed(2)}$
                          </td>
                          <td
                            className={`${
                              item.P < 0 ? 'text-danger' : item.P == 0 ? '' : 'text-success'
                            } text-center`}>
                            {parseFloat(item.P, 2)
                              .toFixed(2)
                              .replace(/\.?0+$/, '')}
                            %
                          </td>
                          <td className="text-center">
                            {parseFloat(item.Q)
                              .toFixed(8)
                              .replace(/\.?0+$/, '')}
                          </td>
                          <td className="text-center">{parseInt(item.n)}</td>
                          <td className="text-end">
                            {nFormatter(parseFloat(item.q) * parseFloat(item.c))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Pagination
                    currentPage={currentPage}
                    lastPage={lastPageNumber}
                    handleNextPage={handleNextPage}
                    handlePrevPage={handlePrevPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoList;
