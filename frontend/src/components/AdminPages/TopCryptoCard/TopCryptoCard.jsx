import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styled.scss';
import axios from 'axios';

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
      const sortedData = response.data
        .filter((coin) => coin.symbol.includes('USDT') && !coin.symbol.includes('BTTC'))
        .sort((a, b) => {
          const percentageChangeA = parseFloat(a.priceChange);
          const percentageChangeB = parseFloat(b.priceChange);
          return percentageChangeB - percentageChangeA;
        });
      const sortedVolumeData = response.data
        .slice(0)
        .filter((coin) => coin.symbol.includes('USDT') && !coin.symbol.includes('BTTC'))
        .sort((a, b) => {
          const percentageChangeA = parseFloat(a.volume);
          const percentageChangeB = parseFloat(b.volume);
          return percentageChangeB - percentageChangeA;
        });
      const symbols = [
        ...sortedData.slice(0, 3),
        ...sortedData.slice(-3),
        ...sortedVolumeData.slice(0, 3)
      ];
      axios
        .get(
          `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=${symbols
            .map((item) => item.symbol.replace('USDT', ''))
            .join(',')}`,
          {
            headers: {
              'X-CMC_PRO_API_KEY': 'a450efd1-15dd-4180-88d6-ebdf88006e81'
            }
          }
        )
        .then((res) => {
          const mapper = (item) => {
            return {
              ...item,
              logo: res.data.data[item.symbol.replace('USDT', '')][0].logo
            };
          };
          setTopGainers(sortedData.slice(0, 3).map(mapper));
          setTopLoosers(sortedData.slice(-3).map(mapper));
          setTopListing(sortedVolumeData.slice(0, 3).map(mapper));
        });
    });
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
                        <img src={item.logo} />
                      </div>
                      <div className="mb-0 ms-2 crypto-name">{item.symbol.replace('USDT', '')}</div>
                    </Link>
                    <span className={`fs-14 text-success`}>
                      +{parseFloat(item.priceChange).toFixed(2)}$
                    </span>
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
                        <img src={item.logo} />
                      </div>
                      <div className="mb-0 ms-2 crypto-name">{item.symbol.replace('USDT', '')}</div>
                    </Link>
                    <span className={`fs-14 text-danger`}>
                      {parseFloat(item.priceChange).toFixed(2)}$
                    </span>
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
                        <img src={item.logo} />
                      </div>
                      <div className="mb-0 ms-2 crypto-name">{item.symbol.replace('USDT', '')}</div>
                    </Link>
                    <span className={`fs-14 text-success`}>{nFormatter(item.volume, 2)}</span>
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
