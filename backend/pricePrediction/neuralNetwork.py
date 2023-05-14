import numpy as np
import pandas as pd
from keras.models import Sequential
from keras.layers import Dense
from keras.optimizers import Adam
from sklearn.preprocessing import MinMaxScaler

# Load data
data = pd.read_csv('cryptocurrency_data.csv')

# Split data into train, validation, and test sets
train_data = data[:800]
val_data = data[800:1000]
test_data = data[1000:]

# Preprocess data
scaler = MinMaxScaler()
train_scaled = scaler.fit_transform(train_data)
val_scaled = scaler.transform(val_data)
test_scaled = scaler.transform(test_data)

# Define neural network architecture
model = Sequential()
model.add(Dense(32, activation='relu', input_shape=(train_scaled.shape[1],)))
model.add(Dense(32, activation='relu'))
model.add(Dense(1, activation='linear'))

# Compile model
model.compile(optimizer=Adam(learning_rate=0.001), loss='mse')

# Train model
history = model.fit(train_scaled, train_data['price'], epochs=100, batch_size=32, validation_data=(val_scaled, val_data['price']))

# Predict future prices
future_prices = []
for i in range(len(test_scaled)):
    current_data = test_scaled[i].reshape(1, -1)
    future_price = model.predict(current_data)[0]
    future_prices.append(future_price)

# Add future prices to test_data DataFrame
test_data['future_price'] = future_prices

# Print test_data DataFrame
print(test_data)