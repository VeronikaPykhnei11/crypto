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
import { correlation, re } from 'mathjs';
import { CryptoHeatMap } from '../CoinHeatMap/CoinMetricCorrelationHeatMap';
import TechIndicatorsTable from '../../../pages/AdminPages/CoinDetails/TechIndicatorsTable';
import TechIndicatorChart from '../../../pages/AdminPages/CoinDetails/TechIndicatorChart';

export const CoinDetails = ({ isFuture }) => {
  const coinSymbol = useSelector(coinSymbolSelector);
  const [coinData, setCoinData] = useState({});
  const [cryptoData, setCryptoData] = useState([]);
  const [prediction, setPrediction] = useState([]);
  useEffect(async () => {
    axios.get('http://127.0.0.1:5000/predict?symbol=' + coinSymbol).then((res) => {
      setPrediction(res.data);
    });
    axios
      .get(`https://api.binance.com/api/v3/exchangeInfo?symbol=${coinSymbol}`)
      .then((response) => {
        const symbol = response.data.symbols[0].baseAsset;
        axios
          .get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=${symbol}`, {
            headers: {
              'X-CMC_PRO_API_KEY': 'a450efd1-15dd-4180-88d6-ebdf88006e81'
            }
          })
          .then((res) => {
            setCoinData(res.data.data[symbol][0]);
          });
      });
    axios
      .get(`https://api.binance.com/api/v3/klines?symbol=${coinSymbol}&interval=1d&limit=180`)
      .then((response) => {
        const preprocessedData = response.data.map((el) => {
          const date = new Date(el[0]);

          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();

          const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
            .toString()
            .padStart(2, '0')}`;
          return [
            formattedDate,
            parseFloat(el[4])
              .toFixed(8)
              .replace(/\.?0+$/, ''),
            parseFloat(el[5])
              .toFixed(8)
              .replace(/\.?0+$/, ''),
            (parseFloat(el[4]) * parseFloat(el[7])).toFixed(8).replace(/\.?0+$/, '')
          ];
        });
        setCryptoData(preprocessedData);
      });
  }, []);
  const lastPrice = (cryptoData.length && cryptoData[cryptoData.length - 1][1]) || 0;

  let score = 0;

  prediction.length &&
    prediction.forEach((item, index) => {
      if (index === 0) {
        if (item > lastPrice) {
          score++;
        } else {
          score--;
        }
      } else {
        if (item > prediction[index - 1]) {
          score++;
        } else {
          score--;
        }
      }
    });
  score = (score + 30) / 60;
  console.log(score);
  return (
    <>
      <div className="row">
        <div className="col-xl-9 col-xxl-9">
          <CoinCandleChartTable
            prediction={prediction}
            isFuture={isFuture}
            coinLogo={coinData.logo}
          />
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
              <a
                target={'_blank'}
                href={coinData && coinData.urls && coinData.urls.website[0]}
                className="coin-details-footer-button">
                Coin Details
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-xxl-6">
          <CoinPriceHistogram
            title={coinData.name}
            dataTitle={'Volume'}
            data={cryptoData.map((el) => el[2])}
            dates={cryptoData.map((el) => el[0])}
          />
        </div>
        <div className="col-xl-6 col-xxl-6">
          <CoinPriceHistogram
            title={coinData.name}
            dataTitle={'MarketCap'}
            data={cryptoData.map((el) => el[3])}
            dates={cryptoData.map((el) => el[0])}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-7 col-xxl-6">
          <TechIndicatorsTable />
        </div>
        <div className="col-xl-5 col-xxl-5 col-sm-6">
          <TechIndicatorChart score={score} />
        </div>
      </div>
    </>
  );
};
