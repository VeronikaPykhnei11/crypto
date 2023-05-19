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

  // console.log(analysis)

  return analysis;
}

// Function to calculate the average of a specific metric
function calculateAverage(data, metric) {
  // console.log(data, 'metric')
  // console.log(metric, 'metric')
  const total = data.reduce((sum, entry) => {
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

const data = [
  { date: '2023-05-01', price: 100, volume: 500, marketCap: 1000 },
  { date: '2023-05-02', price: 110, volume: 600, marketCap: 1200 },
  { date: '2023-05-03', price: 105, volume: 550, marketCap: 1100 },
  // ... Add more data entries here
];

// Calculate daily price volatility (percentage change)
const priceVolatility = [];
for (let i = 1; i < data.length; i++) {
  const prevPrice = data[i - 1].price;
  const currPrice = data[i].price;
  const volatility = ((currPrice - prevPrice) / prevPrice) * 100;
  priceVolatility.push(volatility);
}

// Calculate average daily volatility
const avgVolatility = priceVolatility.reduce((sum, volatility) => sum + volatility, 0) / priceVolatility.length;

// Find maximum and minimum price
const prices = data.map(entry => entry.price);
const maxPrice = Math.max(...prices);
const minPrice = Math.min(...prices);

// Find maximum and minimum volume
const volumes = data.map(entry => entry.volume);
const maxVolume = Math.max(...volumes);
const minVolume = Math.min(...volumes);

// Find maximum and minimum market cap
const marketCaps = data.map(entry => entry.marketCap);
const maxMarketCap = Math.max(...marketCaps);
const minMarketCap = Math.min(...marketCaps);

// Calculate correlation coefficient between price and volume
let sumPrice = 0;
let sumVolume = 0;
let sumPriceVolume = 0;
let sumPriceSquared = 0;
let sumVolumeSquared = 0;

for (let i = 0; i < data.length; i++) {
  const price = data[i].price;
  const volume = data[i].volume;
  sumPrice += price;
  sumVolume += volume;
  sumPriceVolume += price * volume;
  sumPriceSquared += price * price;
  sumVolumeSquared += volume * volume;
}

const n = data.length;
const correlationCoefficient =
  (n * sumPriceVolume - sumPrice * sumVolume) /
  Math.sqrt((n * sumPriceSquared - sumPrice ** 2) * (n * sumVolumeSquared - sumVolume ** 2));

// Calculate exponential moving average (EMA) of price
const emaSpan = 30;
const ema = [];
let prevEma = data[0].price;

for (let i = 1; i < data.length; i++) {
  const price = data[i].price;
  const smoothing = 2 / (emaSpan + 1);
  const emaValue = (price - prevEma) * smoothing + prevEma;
  ema.push(emaValue);
  prevEma = emaValue;
}

// // Display the results
// console.log('Maximum Price:', maxPrice);
// console.log('Minimum Price:', minPrice);
// console.log('Maximum Volume:', maxVolume);
// console.log('Minimum Volume:', minVolume);
// console.log('Maximum Market Cap:', maxMarketCap);
// console.log('Minimum Market Cap:', minMarketCap);
// console.log('Average Daily Volatility:', avgVolatility);
// console.log('Correlation Coefficient:', correlationCoefficient);
// console.log('Exponential Moving Average (EMA) of Price:');
// console.log(ema);
