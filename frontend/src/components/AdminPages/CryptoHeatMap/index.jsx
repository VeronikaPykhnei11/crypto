import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './styled.scss';

export const CryptoHeatMap = () => {
  const [cryptoData, setCryptoData] = useState([]);
  useEffect(async () => {
    axios.get(`https://api.binance.com/api/v3/ticker/24hr`).then((response) => {
      const sortedData = response.data.sort((a, b) => {
        const percentageChangeA = parseFloat(a.volume);
        const percentageChangeB = parseFloat(b.volume);
        return percentageChangeB - percentageChangeA;
      });
      const filteredData = sortedData.map(el => {
        return {name: el.symbol, value: el.volume};
      })
      setCryptoData(filteredData.slice(0, 100))
    })
  }, []);
  const treemapOption = {
    tooltip: {
      formatter: function (info) {
        return [
          'Symbol: ' + info.name + '<br>',
          'Volume: ' + info.value + '<br>',
        ].join('');
      }
    },
    series: [
      {
        type: 'treemap',
        data: cryptoData,
        leafDepth: 1,
        label: {
          show: true,
          formatter: '{b}',
        },
        emphasis: {
          label: {
            show: true,
          },
        },
        levels: [
          {
            itemStyle: {
              borderWidth: 0,
              gapWidth: 5,
            },
          },
        ],
      },
    ],
  };
  return (
    <div className="coin-details-card-wrapper">

    <ReactECharts option={treemapOption} style={{height: '500px', width: '100%'}}/>
    </div>
  );
}
