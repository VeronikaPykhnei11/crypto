import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ScrollToTop } from '../helpers';
import { Header } from '../layouts/Header/Header';
import { Footer } from '../layouts/Footer/Footer';
import { Home } from './Home';
import { Login } from './Login';
import { Pricing } from './Pricing/Pricing';
import { ContactUs } from './ContactUs';
import { SignUp } from './Sign Up';

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
        </Routes>
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
export default Index;
