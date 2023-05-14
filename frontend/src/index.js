import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ErrorBoundary from './pages/ErrorPages/ErrorBoundary';
import { Error } from './pages/ErrorPages/Error';
import 'react-toastify/dist/ReactToastify.css';
import { ConfirmationModal } from './components/common/ConfirmationModal';

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary fallback={<Error />}>
      <PersistGate persistor={persistor}>
        <App />
        <ConfirmationModal/>
      </PersistGate>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
