import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CoinCandleChartTable } from './CoinCandleChartTable/CoinCandleChartTable';
import { CoinDetailsInfo } from '../CoinDetailsInfo';
import CryptoIcon from '../../../assets/images/icons/ethereum.png';
import './styled.scss';
import { CoinPriceHistogram } from './CoinPriceHistogram';
import { AnalysisCrypto } from './AnalysisCrypto/AnalysisCrypto';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { coinSymbolSelector } from '../../../redux/selectors/coinDetailsSelectors';

export const CoinDetails = ({isFuture}) => {
  const coinSymbol = useSelector(coinSymbolSelector);
  const [coinData, setCoinData] = useState({});
  const [cryptoData, setCryptoData] = useState([]);
  useEffect(async () => {
    axios.get(`https://api.binance.com/api/v3/exchangeInfo?symbol=${coinSymbol}`).then((response) => {
      console.log(response, 12345)
      const symbol = response.data.symbols[0].baseAsset;
      axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=${symbol}`, {
        headers: {
          'X-CMC_PRO_API_KEY': 'a450efd1-15dd-4180-88d6-ebdf88006e81',
        },
      }).then((res) => {
        setCoinData(res.data.data[symbol][0])
      })

    })
    axios.get(`https://api.binance.com/api/v3/klines?symbol=${coinSymbol}&interval=1d&limit=180`).then((response) => {
      const preprocessedData = response.data.map((el) => {
        const date = new Date(el[0]);

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        console.log(parseFloat(el[4]).toFixed(8).replace(/\.?0+$/, ""), 1111111)
        return [formattedDate, parseFloat(el[4]).toFixed(8).replace(/\.?0+$/, ""), parseFloat(el[5]).toFixed(8).replace(/\.?0+$/, ""), (parseFloat(el[4]) * parseFloat(el[7])).toFixed(8).replace(/\.?0+$/, "")];
      })
      setCryptoData(preprocessedData)
    })
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-xl-9 col-xxl-9">
          <CoinCandleChartTable isFuture={isFuture} coinLogo={coinData.logo}/>
        </div>
        <div className="col-xl-3 col-xxl-3 col-sm-6">
          <div className="coin-details-card-wrapper">
            <div className="coin-details-header">
              <h4 className="coin-details-header-title">About</h4>
            </div>
            <CoinDetailsInfo
              icon={coinData.logo}
              title={'Digital Cash'}
              coinName={coinData.name}
              infoText={coinData.description}
            />
            <div className="coin-details-footer">
              <Link to={coinData.website} className="coin-details-footer-button">
                Coin Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-9 col-xxl-9">
          <CoinPriceHistogram title={coinData.name} dataTitle={"Price"} data={cryptoData.map((el) => el[1])} dates={cryptoData.map((el) => el[0])}/>
        </div>
        <div className="col-xl-3 col-xxl-3 col-sm-6">
          <AnalysisCrypto title={"Price"} data={cryptoData.map((el) => {
            console.log(el)
            return {
              date: el[0],
              value: el[1],
            }
          })} />
        </div>
        <div className="col-xl-9 col-xxl-9">
          <CoinPriceHistogram title={coinData.name} dataTitle={"Volume"} data={cryptoData.map((el) => el[2])} dates={cryptoData.map((el) => el[0])}/>
        </div>
        <div className="col-xl-3 col-xxl-3 col-sm-6">
          <AnalysisCrypto title={"Volume"} data={cryptoData.map((el) => {
            return {
              date: el[0],
              value: el[2],
            }
          })} />
        </div>
        <div className="col-xl-9 col-xxl-9">
          <CoinPriceHistogram title={coinData.name} dataTitle={"MarketCap"} data={cryptoData.map((el) => el[3])} dates={cryptoData.map((el) => el[0])}/>
        </div>
        <div className="col-xl-3 col-xxl-3 col-sm-6">
          <AnalysisCrypto title={"MarketCap"} data={cryptoData.map((el) => {
            return {
              date: el[0],
              value: el[3],
            }
          })} />
        </div>
      </div>
    </>
  );
};
