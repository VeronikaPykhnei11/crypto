import React from 'react';
import { Link } from 'react-router-dom';
import {generateTextAnalysis} from './generateTextAnalysis';

export const AnalysisCrypto = ({title, data}) => {
  console.log(data, "DATA")
  const analysisResult = generateTextAnalysis(data);
  console.log(analysisResult)
  // const labels = ["Average Volume: ", "Minimum Volume: ", "Maximum Volume: ", "Average Price: ", "Minimum Price: ", "Maximum Price: ", "Average Market Cap: ", "Minimum Market Cap: ", "Maximum Market Cap: ", "Volume Volatility: ", "Price Volatility: ", "Market Cap Volatility: ", "Volume-Price Correlation: ", "Volume-Market Cap Correlation: ", "Volume-Market Cap Correlation: ", "Price-Market Cap Correlation: "]
  const labels = [`Average ${title}: `, `Minimum ${title}: `, `Maximum ${title}: `, `${title} Volatility: `]
  return (
    <div className="coin-details-card-wrapper">
      <div className="coin-details-header">
        <h4 className="coin-details-header-title">Analysis {title}</h4>
      </div>

      <div>
        {analysisResult.map((res, index) => (
          <>
            <p>
              {labels[index]}{res}
            </p>
          </>
        ))}
      </div>
      <div className="coin-details-footer">
        <Link to={'/future'} className="coin-details-footer-button">
          Analysis Details
        </Link>
      </div>
    </div>
  );
};
