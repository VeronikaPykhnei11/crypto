import React from 'react';
import Route from './pages/route';
import { Toast } from './components/common/Toast/SuccessToast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

function App() {
  return (
    <div className="App">
      <Route />
      <Toast />
    </div>
  );
}

export default App;
