import json

import pandas as pd
from model import predict
import requests
from flask import Flask, request
from flask_cors import CORS


def get_data(symbol='BTCUSDT'):
    # Binance API endpoint
    url = 'https://api.binance.com/api/v3/klines'

    # Parameters for fetching historical data
    interval = '1d'  # Interval for feature price
    limit = 365  # Number of historical data points to fetch

    # Construct query parameters for API call
    params = {
        'symbol': symbol,
        'interval': interval,
        'limit': limit
    }

    # Make API call to fetch historical data
    response = requests.get(url, params=params).json()
    print(response)

    # Convert response to pandas dataframe
    df = pd.DataFrame(response, columns=['open_time', 'open', 'high', 'low', 'close', 'volume', 'close_time',
                                         'quote_asset_volume', 'num_trades', 'taker_buy_base_asset_volume',
                                         'taker_buy_quote_asset_volume', 'ignored'])

    # Convert timestamps to datetime format
    df['open_time'] = pd.to_datetime(df['open_time'], unit='ms')
    df['close_time'] = pd.to_datetime(df['close_time'], unit='ms')
    df['open_time'] = df['open_time'].dt.strftime('%m/%d/%Y')

    # Convert price data to numeric format
    df = df.apply(pd.to_numeric, errors='ignore')

    # Set column names
    df.columns = ['Open time', 'Open', 'High', 'Low', 'Close', 'Volume', 'Close time', 'Quote asset volume',
                  'Number of trades', 'Taker buy base asset volume', 'Taker buy quote asset volume', 'Ignore']
    df.head()
    # Save dataframe to CSV file
    df.to_csv('data_' + symbol + '.csv', index=False)


app = Flask(__name__)
CORS(app)

cache = {}


@app.route('/predict')
def hello():
    symbol = request.args.get('symbol')
    if symbol in cache:
        return cache[symbol]
    get_data(symbol)
    result = predict(symbol)
    print('RESULT: ----------------------------')
    print(result)
    cache[symbol] = result
    return result


if __name__ == '__main__':
    app.run()
