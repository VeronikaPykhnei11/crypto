import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScrollToTop from './../layouts/ScrollToTop';
import { Header } from './../layouts/Header/Header';
import Footer from './../layouts/Footer';
import { Home } from './Home';
import Login from './Login';
import AboutUs from './AboutUs';
import Pricing from './Pricing';
import ContactUs from './ContactUs';

function Index() {
  return (
    <BrowserRouter basename="/frontend/react">
      <div className="page-wraper">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/pricing" exact element={<Pricing />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
export default Index;
