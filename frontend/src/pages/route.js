import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ScrollToTop } from '../helpers';
import { MainRoute } from './MainPages/MainRoute';
import AdminRoute from './AdminPages/AdminRoute';

const Home = React.lazy(() => import('./MainPages/Home'));
const Login = React.lazy(() => import('./MainPages/Login'));
const Pricing = React.lazy(() => import('./MainPages/Pricing/Pricing'));
const ContactUs = React.lazy(() => import('./MainPages/ContactUs'));
const SignUp = React.lazy(() => import('./MainPages/Sign Up'));
const Dashboard = React.lazy(() => import('./AdminPages/Dashboard/Dashboard'));
const CryptoList = React.lazy(() => import('./AdminPages/CryptoList/CryptoList'));
const CoinDetails = React.lazy(() => import('./AdminPages/CoinDetails/CoinDetails'));
const FuturePrice = React.lazy(() => import('./AdminPages/FuturePrice/FuturePrice'));

function Index() {
  return (
    <BrowserRouter>
      <div className="page-wraper">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<MainRoute />}>
              <Route path="/" exact element={<Home />} />
              <Route path="/pricing" exact element={<Pricing />}/>
              <Route path="/contact-us" exact element={<ContactUs />} />
            </Route>
            <Route path="/login" exact element={<Login />} />
            <Route path="/sign-up" exact element={<SignUp />} />
            <Route path="admin" element={<AdminRoute />}>
              <Route index path="dashboard" element={ <Dashboard />} />
              <Route path="crypto" element={<CryptoList />}/>
              <Route path="coin-details" element={<CoinDetails />} />
              <Route path="future" element={<FuturePrice />} />
            </Route>
          </Routes>
        </React.Suspense>
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
export default Index;
