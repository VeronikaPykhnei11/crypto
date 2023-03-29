import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './styled.scss';
import { SearchBar } from '../../../components/AdminPages/SearchBar/SearchBar';
import { Pagination } from '../../../components/AdminPages/Pagination/Pagination';

export const CryptoList = () => {
  const tableData = [
    {
      id: 11,
      title1: 'ZEC',
      title2: 'ZCash',
      price: '$0.9632',
      change: '+9%',
      volume: '96,525.00',
      cap: '$18M'
    },
    {
      id: 12,
      title1: 'AUD',
      title2: 'Australian Doller',
      price: '$0.6932',
      change: '+22%',
      volume: '30,585.00',
      cap: '$96M'
    },
    {
      id: 13,
      title1: 'ETH',
      title2: 'Etherium Classic',
      price: '$0.6258',
      change: '+40%',
      volume: '80,752.00',
      cap: '$22M'
    },
    {
      id: 14,
      title1: 'XRP',
      title2: 'Ripplecoin',
      price: '$0.6258',
      change: '-11%',
      volume: '80,752.00',
      cap: '$22M'
    },
    {
      id: 15,
      title1: 'XMR',
      title2: 'Monero',
      price: '$0.3685',
      change: '-8%',
      volume: '75,52.00',
      cap: '$30M'
    },
    {
      id: 16,
      title1: 'Dash',
      title2: 'Dash',
      price: '$0.1478',
      change: '+11%',
      volume: '14,752.00',
      cap: '$9M'
    },
    {
      id: 13,
      title1: 'ETH',
      title2: 'Etherium Classic',
      price: '$0.6258',
      change: '+40%',
      volume: '80,752.00',
      cap: '$22M'
    },
    {
      id: 14,
      title1: 'XRP',
      title2: 'Ripplecoin',
      price: '$0.6258',
      change: '-11%',
      volume: '80,752.00',
      cap: '$22M'
    },
    {
      id: 15,
      title1: 'XMR',
      title2: 'Monero',
      price: '$0.3685',
      change: '-8%',
      volume: '75,52.00',
      cap: '$30M'
    },
    {
      id: 16,
      title1: 'Dash',
      title2: 'Dash',
      price: '$0.1478',
      change: '+11%',
      volume: '14,752.00',
      cap: '$9M'
    },
    {
      id: 13,
      title1: 'ETH',
      title2: 'Etherium Classic',
      price: '$0.6258',
      change: '+40%',
      volume: '80,752.00',
      cap: '$22M'
    },
    {
      id: 14,
      title1: 'XRP',
      title2: 'Ripplecoin',
      price: '$0.6258',
      change: '-11%',
      volume: '80,752.00',
      cap: '$22M'
    }
  ];
  return (
    <>
      <div className={'row'}>
        <div className="col-xl-4 offset-8">
          <SearchBar />
        </div>
      </div>
      <div className={'row'}>
        <div className="col-xl-12">
          <div className="card table-wrapper">
            <div className="card-body pt-0">
              <div className="table-responsive dataTablemarket">
                <div id="market_wrapper" className="dataTables_wrapper no-footer">
                  <table
                    className="table dataTable  shadow-hover display"
                    style={{ minWidth: '845px' }}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Change</th>
                        <th className="text-center">24 Volume</th>
                        <th className="text-end">Market Cap</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <Link to={'#'} className="market-title d-flex align-items-center">
                              <div
                                className={` market-icon ${
                                  index === 5 ? 'bg-success' : 'bg-warning'
                                }`}>
                                <div className="market-icon bg-primary">
                                  <i className="fa-brands fa-ethereum"></i>
                                </div>
                              </div>
                              <h6 className="mb-0 ms-2"> {item.title1}</h6>
                              <span className="crypto-second-title ms-2"> {item.title2}</span>
                            </Link>
                          </td>
                          <td className="text-center">{item.price}</td>
                          <td
                            className={`${
                              index === 3 || index === 4 ? 'text-danger' : 'text-success'
                            } text-center`}>
                            {item.change}
                          </td>
                          <td className="text-center">{item.volume}</td>
                          <td className="text-end">{item.cap}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
