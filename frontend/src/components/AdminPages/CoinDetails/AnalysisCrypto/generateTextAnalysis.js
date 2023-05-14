// Sample historical data
const historicalData = [
  { date: '2022-01-01', volume: 1000, price: 50, marketCap: 50000 },
  { date: '2022-01-02', volume: 1500, price: 60, marketCap: 90000 },
  { date: '2022-01-03', volume: 2000, price: 70, marketCap: 140000 },
  // Add more historical data entries...
];

// Function to generate text analysis
export const generateTextAnalysis = (data) => {
  let analysis = [];

  analysis.push(calculateAverage(data, 'value'))
  analysis.push(calculateMinimum(data, 'value'))
  analysis.push(calculateMaximum(data, 'value'))

  analysis.push(calculateVolatility(data, 'value').toFixed(2));

  // analysis.push(calculateCorrelation(data, 'volume', 'price').toFixed(2));
  // analysis.push(calculateCorrelation(data, 'volume', 'marketCap').toFixed(2));
  // analysis.push(calculateCorrelation(data, 'price', 'marketCap').toFixed(2));

  console.log(analysis)

  return analysis;
}

// Function to calculate the average of a specific metric
function calculateAverage(data, metric) {
  console.log(data, 'metric')
  console.log(metric, 'metric')
  const total = data.reduce((sum, entry) => {
    console.log(entry[metric], sum)
    return sum + parseFloat(entry[metric])
  }, 0);
  return (total / data.length).toFixed(2);
}

const calculateRegularAverage = (data) => {
  return data.reduce( ( p, c ) => p + c, 0 ) / data.length;
}

// Function to calculate the minimum of a specific metric
function calculateMinimum(data, metric) {
  return Math.min(...data.map(entry => + parseFloat(entry[metric])));
}

// Function to calculate the maximum of a specific metric
function calculateMaximum(data, metric) {
  return Math.max(...data.map(entry => + parseFloat(entry[metric])));
}

// Function to calculate the volatility of a specific metric
function calculateVolatility(data, metric) {
  const values = data.map(entry => entry[metric]);
  const average = calculateAverage(data, metric);
  const squareDifferences = values.map(value => Math.pow(value - average, 2));
  const variance = calculateRegularAverage(squareDifferences);
  return Math.sqrt(variance);
}

// Function to calculate the correlation between two metrics
function calculateCorrelation(data, metric1, metric2) {
  const values1 = data.map(entry => entry[metric1]);
  const values2 = data.map(entry => entry[metric2]);
  const avg1 = calculateAverage(data, metric1);
  const avg2 = calculateAverage(data, metric2);
  const deviations1 = values1.map(value => value - avg1);
  const deviations2 = values2.map(value => value - avg2);
  const numerator = deviations1.reduce((sum, deviation1, index) => sum + deviation1 * deviations2[index], 0);
  const denominator = Math.sqrt(deviations1.reduce((sum, deviation) => sum + Math.pow(deviation, 2), 0)) * Math.sqrt(deviations2.reduce((sum, deviation) => sum + Math.pow(deviation, 2), 0));
  return numerator / denominator;
}
