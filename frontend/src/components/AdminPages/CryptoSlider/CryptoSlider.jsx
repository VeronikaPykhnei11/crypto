import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import './styled.scss';
import axios from 'axios';

export const CryptoSlider = () => {
  const [cryptoData, setCryptoData] = useState([]);
  useEffect(async () => {
    axios.get(`https://api.binance.com/api/v3/ticker/24hr`).then((response) => {
      let sortedData = response.data.sort((a, b) => {
        const percentageChangeA = parseFloat(a.lastPrice);
        const percentageChangeB = parseFloat(b.lastPrice);
        return percentageChangeB - percentageChangeA;
      });
      setCryptoData(response.data.slice(0, 20))
    })
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
                          className="fa fa-caret-up scale5 me-2 text-success"
                          aria-hidden="true"></i>
                        {item.priceChangePercent}% (24h)
                      </p>
                      <h4 className="heading mb-0">${parseFloat(item.lastPrice).toFixed(2)}</h4>
                    </div>
                      <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M28.5 16.5002C28.4986 14.844 27.156 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.156 19.4985 28.4986 18.1559 28.5 16.5002Z"
                          fill="#FFAB2D"
                        />
                        <path
                          d="M16.5002 28.5H25.5003C27.1569 28.5 28.5 27.157 28.5 25.5003C28.5 23.8432 27.1569 22.5001 25.5003 22.5001H16.5002V28.5Z"
                          fill="#FFAB2D"
                        />
                        <path
                          d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9866 9.40762 32.5924 0.0133972 21 0.00012207ZM31.5002 25.4998C31.4961 28.8122 28.8122 31.4961 25.5003 31.4998V32.9998C25.5003 33.8284 24.8283 34.4999 24.0002 34.4999C23.1716 34.4999 22.5001 33.8284 22.5001 32.9998V31.4998H19.5004V32.9998C19.5004 33.8284 18.8284 34.4999 18.0003 34.4999C17.1717 34.4999 16.5002 33.8284 16.5002 32.9998V31.4998H12.0004C11.1718 31.4998 10.5003 30.8282 10.5003 30.0001C10.5003 29.1716 11.1718 28.5 12.0004 28.5H13.5V13.5H12.0004C11.1718 13.5 10.5003 12.8285 10.5003 11.9999C10.5003 11.1714 11.1718 10.4998 12.0004 10.4998H16.5002V9.00021C16.5002 8.17166 17.1717 7.50012 18.0003 7.50012C18.8288 7.50012 19.5004 8.17166 19.5004 9.00021V10.4998H22.5001V9.00021C22.5001 8.17166 23.1716 7.50012 24.0002 7.50012C24.8287 7.50012 25.5003 8.17166 25.5003 9.00021V10.4998C28.7998 10.4861 31.486 13.1494 31.5002 16.4489C31.5075 18.1962 30.7499 19.8593 29.4265 21C30.7375 22.128 31.4942 23.77 31.5002 25.4998Z"
                          fill="#FFAB2D"
                        />
                      </svg>
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
