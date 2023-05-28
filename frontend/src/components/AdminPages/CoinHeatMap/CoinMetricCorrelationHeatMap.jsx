import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactEcharts from 'echarts-for-react';
import { useSelector } from 'react-redux';
import { coinSymbolSelector } from '../../../redux/selectors/coinDetailsSelectors';
import './styled.scss';

export const CryptoHeatMap = () => {
  const coinSymbol = useSelector(coinSymbolSelector);
  const [correlationMatrix, setCorrelationMatrix] = useState([]);

  const metrics = [
    'Open price',
    'High price',
    'Low price',
    'Close price',
    'Volume',
    'Quote asset volume',
    'Number of trades'
  ];

  useEffect(async () => {
    axios
      .get(`https://api.binance.com/api/v3/klines?symbol=${coinSymbol}&interval=1d&limit=180`)
      .then((response) => {
        const preprocessedData = response.data.map((el) => {
          return [
            parseFloat(el[1]),
            parseFloat(el[2]),
            parseFloat(el[3]),
            parseFloat(el[4]),
            parseFloat(el[5]),
            parseFloat(el[6]),
            parseFloat(el[7])
          ];
        });
        const correlationMatrix = calculateCorrelationMatrix(preprocessedData);
        setCorrelationMatrix(correlationMatrix);
      });
  }, []);

  const calculateCorrelationMatrix = (data) => {
    const matrixSize = data.length;
    const correlationMatrix = Array.from(Array(matrixSize), () => new Array(matrixSize));

    for (let i = 0; i < matrixSize; i++) {
      for (let j = 0; j < matrixSize; j++) {
        const correlation = calculatePearsonCorrelation(data[i], data[j]);
        correlationMatrix.push([i, j, correlation]);
      }
    }

    return correlationMatrix;
  };

  const calculatePearsonCorrelation = (data1, data2) => {
    const sum1 = data1.reduce((a, b) => a + b, 0);
    const sum2 = data2.reduce((a, b) => a + b, 0);

    const avg1 = sum1 / data1.length;
    const avg2 = sum2 / data2.length;

    let numerator = 0;
    let denominator1 = 0;
    let denominator2 = 0;

    for (let i = 0; i < data1.length; i++) {
      const diff1 = data1[i] - avg1;
      const diff2 = data2[i] - avg2;

      numerator += diff1 * diff2;
      denominator1 += diff1 ** 2;
      denominator2 += diff2 ** 2;
    }

    const denominator = Math.sqrt(denominator1) * Math.sqrt(denominator2);

    return numerator / denominator;
  };

  const getOption = () => {
    const option = {
      title: {
        text: 'Теплова карта матриці кореляції'
      },
      tooltip: {
        position: 'top',
        formatter: (params) => `${params.data[2].toFixed(2)}`
      },
      grid: {
        height: '50%',
        top: '10%'
      },
      xAxis: {
        type: 'category',
        data: metrics.map((_, i) => metrics[i]),
        splitArea: {
          show: true
        }
      },
      yAxis: {
        type: 'category',
        data: metrics.map((_, i) => metrics[i]),
        splitArea: {
          show: true
        }
      },
      visualMap: {
        min: -1,
        max: 1,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%'
      },
      series: [
        {
          name: 'Correlation',
          type: 'heatmap',
          data: correlationMatrix.map((row, rowIndex) =>
            row.map((correlation, colIndex) => [rowIndex, colIndex, correlation || '-'])
          ),
          label: {
            show: true
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    return option;
  };

  return (
    <ReactEcharts
      option={getOption()}
      style={{ height: '600px', width: '100%' }}
      className="react_for_echarts"
    />
  );
};
