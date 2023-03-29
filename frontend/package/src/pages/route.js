import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ScrollToTop } from '../helpers';
import { Header } from '../layouts/MainPages/Header/Header';
import { Footer } from '../layouts/MainPages/Footer/Footer';
import { Home } from './MainPages/Home';
import { Login } from './MainPages/Login';
import { Pricing } from './MainPages/Pricing/Pricing';
import { ContactUs } from './MainPages/ContactUs';
import { SignUp } from './MainPages/Sign Up';
import { AdminHome } from './AdminPages/AdminHome';
import { Dashboard } from './AdminPages/Dashboard/Dashboard';
import { CryptoList } from './AdminPages/CryptoList/CryptoList';
import { CoinDetails } from './AdminPages/CoinDetails/CoinDetails';

function Index() {
  return (
    <BrowserRouter basename="/frontend/react">
      <div className="page-wraper">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {' '}
                <Header /> <Home /> <Footer />
              </>
            }
          />
          <Route
            path="/pricing"
            exact
            element={
              <>
                {' '}
                <Header /> <Pricing /> <Footer />{' '}
              </>
            }
          />
          <Route
            path="/contact-us"
            exact
            element={
              <>
                {' '}
                <Header /> <ContactUs /> <Footer />{' '}
              </>
            }
          />
          <Route path="/login" exact element={<Login />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route
            path="/dashboard"
            exact
            element={
              <AdminHome>
                <Dashboard />
              </AdminHome>
            }
          />
          <Route
            path="/crypto"
            exact
            element={
              <AdminHome>
                <CryptoList />
              </AdminHome>
            }
          />
          <Route
            path="/coin-details"
            exact
            element={
              <AdminHome>
                <CoinDetails />
              </AdminHome>
            }
          />
        </Routes>
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
export default Index;
