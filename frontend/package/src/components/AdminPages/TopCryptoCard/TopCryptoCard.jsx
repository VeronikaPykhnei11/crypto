import React from 'react';
import { Link } from 'react-router-dom';
import './styled.scss';

export const TopCryptoCard = () => {
  const cardBlog = [
    { title: 'Gainers' },
    { title: 'Loosers' },
    { title: 'Highlites' },
    { title: 'Listing' }
  ];
  return (
    <div className={'row top-card-wrapper'}>
      <div className="col-xl-12">
        <div className="row">
          {cardBlog.map((item, index) => (
            <div className="col-xl-3 col-lg-6 col-md-12" key={index}>
              <div className="card">
                <div className="card-body py-3">
                  <h4 className="top-card-title mb-3">Top {item.title}</h4>
                  <div className="market-list d-flex align-items-center justify-content-between mb-2">
                    <Link to={'#'} className="market-title d-flex align-items-center">
                      <div className="market-icon bg-warning">
                        <i className="fa-solid fa-bitcoin-sign"></i>
                      </div>
                      <div className="mb-0 ms-2 crypto-name">BTC</div>
                    </Link>
                    <span className="fs-14">273</span>
                    <span className="fs-14 text-success">+35.56%</span>
                  </div>
                  <div className="market-list d-flex align-items-center justify-content-between mb-2">
                    <Link to={'#'} className="market-title d-flex align-items-center">
                      <div className="market-icon bg-primary">
                        <i className="fa-brands fa-ethereum"></i>
                      </div>
                      <div className="mb-0 ms-2 crypto-name">ETH</div>
                    </Link>
                    <span className="fs-14">150</span>
                    <span className="fs-14 text-success">+25.25%</span>
                  </div>
                  <div className="market-list d-flex align-items-center justify-content-between mb-2">
                    <Link to={'#'} className="market-title d-flex align-items-center">
                      <div className="market-icon bg-danger">
                        <i className="fa-solid fa-litecoin-sign"></i>
                      </div>
                      <div className="mb-0 ms-2 crypto-name">LTC</div>
                    </Link>
                    <span className="fs-14">150</span>
                    <span className="fs-14 text-success">+25.25%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
