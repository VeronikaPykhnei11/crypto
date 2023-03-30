import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ErrorBoundary from './pages/ErrorPages/ErrorBoundary';
import { Error } from './pages/ErrorPages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <ErrorBoundary fallback={<Error />}>
        <App />
      </ErrorBoundary>
    </Provider>
  </>
);

reportWebVitals();
