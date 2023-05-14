import React from 'react';
import { generateTextAnalysis } from '../CoinDetails/AnalysisCrypto/generateTextAnalysis';

export const DeepAnalysisCrypto = () => {
  const analysisResult = generateTextAnalysis(historicalData);
  const labels = ["Average Volume: ", "Minimum Volume: ", "Maximum Volume: ", "Average Price: ", "Minimum Price: ", "Maximum Price: ", "Average Market Cap: ", "Minimum Market Cap: ", "Maximum Market Cap: ", "Volume Volatility: ", "Price Volatility: ", "Market Cap Volatility: ", "Volume-Price Correlation: ", "Volume-Market Cap Correlation: ", "Volume-Market Cap Correlation: ", "Price-Market Cap Correlation: "]
  return (
    <></>
  );
};