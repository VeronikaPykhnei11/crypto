import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styled.scss';
import axios from 'axios';

export const TopCryptoCard = () => {
  const [topGainers, setTopGainers] = useState([]);
  const [topLoosers, setTopLoosers] = useState([]);
  const [topListing, setTopListing] = useState([]);
  // const cardBlog = [
  //   { title: 'Gainers', cryptoSymbolFirst: "CTSI", changeFirst: "+38.88%", cryptoSymbolSecond: "WEMIX", changeSecond: "+19.63%", cryptoSymbolThird: "FTT", changeThird: "+18.45%" },
  //   { title: 'Loosers', cryptoSymbolFirst: "KAS", changeFirst: "-12.28%", cryptoSymbolSecond: "ID", changeSecond: "-6.96%", cryptoSymbolThird: "FET", changeThird: "-4.66%" },
  //   { title: 'Highlites', cryptoSymbolFirst: "WAXP", changeFirst: "+21.85%", cryptoSymbolSecond: "OKB", changeSecond: "+14.72%", cryptoSymbolThird: "JASMY", changeThird: "+14.21%" },
  //   { title: 'Listing', cryptoSymbolFirst: "STX", changeFirst: "+11.24%", cryptoSymbolSecond: "XEM", changeSecond: "+9.75%", cryptoSymbolThird: "WBTC", changeThird: "+7.93%" }
  // ];
  useEffect(async () => {
    axios.get(`https://api.binance.com/api/v3/ticker/24hr`).then((response) => {
      const sortedData = response.data.sort((a, b) => {
        const percentageChangeA = parseFloat(a.priceChange);
        const percentageChangeB = parseFloat(b.priceChange);
        return percentageChangeB - percentageChangeA;
      });
      const sortedVolumeData = response.data.slice(0).sort((a, b) => {
        const percentageChangeA = parseFloat(a.volume);
        const percentageChangeB = parseFloat(b.volume);
        return percentageChangeB - percentageChangeA;
      });

      setTopGainers(sortedData.slice(0, 3));
      setTopLoosers(sortedData.slice(-3));
      setTopListing(sortedVolumeData.slice(0, 3));
    })
  }, []);
  return (
    <div className={'row top-card-wrapper'}>
      <div className="col-xl-12">
        <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="card">
                <div className="card-body py-3">
                  <h4 className="top-card-title mb-3">Top Gainers</h4>
                  {topGainers.map((item, index) => (
                    <div className="market-list d-flex align-items-center justify-content-between mb-2">
                      <Link to={'#'} className="market-title d-flex align-items-center">
                        <div className="market-icon bg-warning">
                          <i className="fa-solid fa-bitcoin-sign"></i>
                        </div>
                        <div className="mb-0 ms-2 crypto-name">{item.symbol}</div>
                      </Link>
                      <span className={`fs-14 text-success`}>+{parseFloat(item.priceChange).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="card">
                <div className="card-body py-3">
                  <h4 className="top-card-title mb-3">Top Loosers</h4>
                  {topLoosers.map((item, index) => (
                    <div className="market-list d-flex align-items-center justify-content-between mb-2">
                      <Link to={'#'} className="market-title d-flex align-items-center">
                        <div className="market-icon bg-warning">
                          <i className="fa-solid fa-bitcoin-sign"></i>
                        </div>
                        <div className="mb-0 ms-2 crypto-name">{item.symbol}</div>
                      </Link>
                      <span className={`fs-14 text-danger`}>{parseFloat(item.priceChange).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="card">
                <div className="card-body py-3">
                  <h4 className="top-card-title mb-3">Top Listing</h4>
                  {topListing.map((item, index) => (
                    <div className="market-list d-flex align-items-center justify-content-between mb-2">
                      <Link to={'#'} className="market-title d-flex align-items-center">
                        <div className="market-icon bg-warning">
                          <i className="fa-solid fa-bitcoin-sign"></i>
                        </div>
                        <div className="mb-0 ms-2 crypto-name">{item.symbol}</div>
                      </Link>
                      <span className={`fs-14 text-success`}>{parseFloat(item.volume).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
