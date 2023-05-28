import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import './styled.scss';
import axios from 'axios';

export const CryptoSlider = () => {
  const [cryptoData, setCryptoData] = useState([]);
  useEffect(async () => {
    axios.get(`https://api.binance.com/api/v3/ticker/24hr`).then((response) => {
      const symbols = response.data
        .filter(
          (coin) =>
            coin.symbol.includes('USDT') &&
            !coin.symbol.includes('IOTA') &&
            !coin.symbol.includes('PAX')
        )
        .slice(0, 20)
        .map((coin) => coin.symbol.replace('USDT', ''));
      axios
        .get(
          `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=${symbols.join(',')}`,
          {
            headers: {
              'X-CMC_PRO_API_KEY': 'a450efd1-15dd-4180-88d6-ebdf88006e81'
            }
          }
        )
        .then((res) => {
          setCryptoData(
            response.data
              .filter(
                (coin) =>
                  coin.symbol.includes('USDT') &&
                  !coin.symbol.includes('IOTA') &&
                  !coin.symbol.includes('PAX')
              )
              .slice(0, 20)
              .map((coin) => {
                return {
                  ...coin,
                  logo:
                    res.data.data[coin.symbol.replace('USDT', '')][0] &&
                    res.data.data[coin.symbol.replace('USDT', '')][0].logo
                };
              })
          );
        });
    });
  }, []);
  return (
    <div className={'row m-2'}>
      <div className="col-xxl-12">
        <div className="overflow-hidden bg-transparent dz-crypto-scroll shadow-none">
          <ul className="crypto-list" id="crypto-webticker">
            <Marquee speed={50} loop={0} pauseOnHover={true} gradient={false}>
              {cryptoData.map((item, index) => (
                <div className="card overflow-hidden " key={index}>
                  <div className="card-body d-flex align-items-center">
                    <div className="me-4">
                      <p className="mb-2 fs-13">
                        <i
                          className={
                            item.priceChangePercent > 0
                              ? 'fa scale5 me-2 text-success fa-caret-up'
                              : 'fa scale5 me-2 text-danger fa-caret-down'
                          }
                          aria-hidden="true"></i>
                        {item.priceChangePercent}% (24h)
                      </p>
                      <h4 className="heading mb-0">${parseFloat(item.lastPrice).toFixed(2)}</h4>
                    </div>
                    <img width={'30px'} height={'30px'} src={item.logo} />
                  </div>
                </div>
              ))}
            </Marquee>
          </ul>
        </div>
      </div>
    </div>
  );
};
