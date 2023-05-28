import pandas as pd
import numpy as np
import math

from sklearn.metrics import mean_squared_error, mean_absolute_error, explained_variance_score, r2_score
from sklearn.metrics import mean_poisson_deviance, mean_gamma_deviance
from sklearn.preprocessing import MinMaxScaler

from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM

from itertools import cycle


def predict(symbol):
    maindf = pd.read_csv('./data_' + symbol + '.csv')

    # In[4]:

    print('Total number of days present in the dataset: ', maindf.shape[0])
    print('Total number of fields present in the dataset: ', maindf.shape[1])

    print('Null Values:', maindf.isnull().values.sum())

    print('NA values:', maindf.isnull().values.any())

    sd = maindf.iloc[0][0]
    ed = maindf.iloc[-1][0]

    print('Starting Date', sd)
    print('Ending Date', ed)

    maindf['Date'] = pd.to_datetime(maindf['Open time'], format='%m/%d/%Y')

    y_2014 = maindf.loc[(maindf['Date'] >= '2014-09-17')
                        & (maindf['Date'] < '2014-12-31')]

    # y_2014.drop(y_2014[['Adj Close','Volume']],axis=1)

    # In[18]:

    monthvise = y_2014.groupby(y_2014['Date'].dt.strftime('%B'))[['Open', 'Close']].mean()
    new_order = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                 'September', 'October', 'November', 'December']
    monthvise = monthvise.reindex(new_order, axis=0)

    # Note that we only have few months in 2014 so the rest of the months are not plotted since we do not have the data

    # In[17]:

    y_2014.groupby(y_2014['Date'].dt.strftime('%B'))['Low'].min()
    monthvise_high = y_2014.groupby(maindf['Date'].dt.strftime('%B'))['High'].max()
    monthvise_high = monthvise_high.reindex(new_order, axis=0)

    monthvise_low = y_2014.groupby(y_2014['Date'].dt.strftime('%B'))['Low'].min()
    monthvise_low = monthvise_low.reindex(new_order, axis=0)

    # Note that we only have few months in 2014 so the rest of the months are not plotted since we do not have the data

    # In[18]:

    names = cycle(['Stock Open Price', 'Stock Close Price', 'Stock High Price', 'Stock Low Price'])
    maindf['Date'] = pd.to_datetime(maindf['Date'], format='%m/%d/%Y')

    # In[60]:

    new_order = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                 'September', 'October', 'November', 'December']
    monthvise = monthvise.reindex(new_order, axis=0)

    names = cycle(['Stock Open Price', 'Stock Close Price', 'Stock High Price', 'Stock Low Price'])

    closedf = maindf[['Date', 'Close']]
    print("Shape of close dataframe:", closedf.shape)

    closedf = closedf[closedf['Date'] > '2021-02-19']
    close_stock = closedf.copy()
    print("Total data for prediction: ", closedf.shape[0])

    del closedf['Date']
    scaler = MinMaxScaler(feature_range=(0, 1))
    closedf = scaler.fit_transform(np.array(closedf).reshape(-1, 1))
    print(closedf.shape)

    training_size = int(len(closedf) * 0.60)
    test_size = len(closedf) - training_size
    train_data, test_data = closedf[0:training_size, :], closedf[training_size:len(closedf), :1]
    print("train_data: ", train_data.shape)
    print("test_data: ", test_data.shape)

    def create_dataset(dataset, time_step=1):
        dataX, dataY = [], []
        for i in range(len(dataset) - time_step - 1):
            a = dataset[i:(i + time_step), 0]  ###i=0, 0,1,2,3-----99   100
            dataX.append(a)
            dataY.append(dataset[i + time_step, 0])
        return np.array(dataX), np.array(dataY)

    time_step = 15
    X_train, y_train = create_dataset(train_data, time_step)
    X_test, y_test = create_dataset(test_data, time_step)

    print("X_train: ", X_train.shape)
    print("y_train: ", y_train.shape)
    print("X_test: ", X_test.shape)
    print("y_test", y_test.shape)

    X_train = X_train.reshape(X_train.shape[0], X_train.shape[1], 1)
    X_test = X_test.reshape(X_test.shape[0], X_test.shape[1], 1)

    print("X_train: ", X_train.shape)
    print("X_test: ", X_test.shape)

    model = Sequential()

    model.add(LSTM(10, input_shape=(None, 1), activation="relu"))

    model.add(Dense(1))

    model.compile(loss="mean_squared_error", optimizer="adam")

    history = model.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=200, batch_size=32, verbose=1)

    import matplotlib.pyplot as plt

    loss = history.history['loss']
    val_loss = history.history['val_loss']

    epochs = range(len(loss))

    # plt.plot(epochs, loss, 'r', label='Training loss')
    # plt.plot(epochs, val_loss, 'b', label='Validation loss')
    # plt.title('Training and validation loss')
    # plt.legend(loc=0)
    # plt.figure()
    #
    # plt.show()

    train_predict = model.predict(X_train)
    test_predict = model.predict(X_test)

    train_predict = scaler.inverse_transform(train_predict)
    test_predict = scaler.inverse_transform(test_predict)
    original_ytrain = scaler.inverse_transform(y_train.reshape(-1, 1))
    original_ytest = scaler.inverse_transform(y_test.reshape(-1, 1))

    print("Train data RMSE: ", math.sqrt(mean_squared_error(original_ytrain, train_predict)))
    print("Train data MSE: ", mean_squared_error(original_ytrain, train_predict))
    print("Train data MAE: ", mean_absolute_error(original_ytrain, train_predict))
    print("-------------------------------------------------------------------------------------")
    print("Test data RMSE: ", math.sqrt(mean_squared_error(original_ytest, test_predict)))
    print("Test data MSE: ", mean_squared_error(original_ytest, test_predict))
    print("Test data MAE: ", mean_absolute_error(original_ytest, test_predict))

    print("Train data explained variance regression score:",
          explained_variance_score(original_ytrain, train_predict))
    print("Test data explained variance regression score:",
          explained_variance_score(original_ytest, test_predict))

    print("Train data R2 score:", r2_score(original_ytrain, train_predict))
    print("Test data R2 score:", r2_score(original_ytest, test_predict))

    print("Train data MGD: ", mean_gamma_deviance(original_ytrain, train_predict))
    print("Test data MGD: ", mean_gamma_deviance(original_ytest, test_predict))
    print("----------------------------------------------------------------------")
    print("Train data MPD: ", mean_poisson_deviance(original_ytrain, train_predict))
    print("Test data MPD: ", mean_poisson_deviance(original_ytest, test_predict))

    look_back = time_step
    trainPredictPlot = np.empty_like(closedf)
    trainPredictPlot[:, :] = np.nan
    trainPredictPlot[look_back:len(train_predict) + look_back, :] = train_predict
    print("Train predicted data: ", trainPredictPlot.shape)

    # shift test predictions for plotting
    testPredictPlot = np.empty_like(closedf)
    testPredictPlot[:, :] = np.nan
    testPredictPlot[len(train_predict) + (look_back * 2) + 1:len(closedf) - 1, :] = test_predict
    print("Test predicted data: ", testPredictPlot.shape)

    names = cycle(['Original close price', 'Train predicted close price', 'Test predicted close price'])

    plotdf = pd.DataFrame({'date': close_stock['Date'],
                           'original_close': close_stock['Close'],
                           'train_predicted_close': trainPredictPlot.reshape(1, -1)[0].tolist(),
                           'test_predicted_close': testPredictPlot.reshape(1, -1)[0].tolist()})

    x_input = test_data[len(test_data) - time_step:].reshape(1, -1)
    temp_input = list(x_input)
    temp_input = temp_input[0].tolist()

    lst_output = []
    n_steps = time_step
    i = 0
    pred_days = 30
    while (i < pred_days):

        if (len(temp_input) > time_step):

            x_input = np.array(temp_input[1:])
            # print("{} day input {}".format(i,x_input))
            x_input = x_input.reshape(1, -1)
            x_input = x_input.reshape((1, n_steps, 1))

            yhat = model.predict(x_input, verbose=0)
            # print("{} day output {}".format(i,yhat))
            temp_input.extend(yhat[0].tolist())
            temp_input = temp_input[1:]
            # print(temp_input)

            lst_output.extend(yhat.tolist())
            i = i + 1

        else:

            x_input = x_input.reshape((1, n_steps, 1))
            yhat = model.predict(x_input, verbose=0)
            temp_input.extend(yhat[0].tolist())

            lst_output.extend(yhat.tolist())
            i = i + 1

    print("Output of predicted next days: ", len(lst_output))

    # - # Plotting last 15 days of dataset and next predicted 30 days

    # In[109]:

    last_days = np.arange(1, time_step + 1)
    day_pred = np.arange(time_step + 1, time_step + pred_days + 1)
    print(last_days)
    print(day_pred)

    # In[110]:

    temp_mat = np.empty((len(last_days) + pred_days + 1, 1))
    temp_mat[:] = np.nan
    temp_mat = temp_mat.reshape(1, -1).tolist()[0]

    last_original_days_value = temp_mat
    next_predicted_days_value = temp_mat

    last_original_days_value[0:time_step + 1] = \
    scaler.inverse_transform(closedf[len(closedf) - time_step:]).reshape(1, -1).tolist()[0]
    next_predicted_days_value[time_step + 1:] = \
    scaler.inverse_transform(np.array(lst_output).reshape(-1, 1)).reshape(1, -1).tolist()[0]

    print(next_predicted_days_value[16:])
    return next_predicted_days_value[16:]
