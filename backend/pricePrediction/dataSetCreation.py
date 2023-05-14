import pandas as pd
import requests
from datetime import datetime

# встановлення параметрів для запиту
url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
parameters = {
  'start':'1',
  'limit':'1000',
  'convert':'USD'
}
headers = {
  'Accepts': 'application/json',
  'X-CMC_PRO_API_KEY': 'YOUR_API_KEY',
}

# виконання запиту
response = requests.get(url, headers=headers, params=parameters)
data = response.json()

# створення списку даних для кожної криптовалюти
crypto_data = []
for currency in data['data'].values():
    symbol = currency['symbol']
    name = currency['name']
    price = currency['quote']['USD']['price']
    market_cap = currency['quote']['USD']['market_cap']
    volume_24h = currency['quote']['USD']['volume_24h']
    percent_change_24h = currency['quote']['USD']['percent_change_24h']
    last_updated = datetime.fromtimestamp(currency['quote']['USD']['last_updated']).strftime('%Y-%m-%d %H:%M:%S')
    crypto_data.append([symbol, name, price, market_cap, volume_24h, percent_change_24h, last_updated])

# створення датафрейму зі списку даних
columns = ['Symbol', 'Name', 'Price', 'Market Cap', 'Volume 24h', '% Change 24h', 'Last Updated']
crypto_df = pd.DataFrame(crypto_data, columns=columns)

# збереження датафрейму у CSV файл
crypto_df.to_csv('crypto_data.csv', index=False)