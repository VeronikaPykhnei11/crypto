import React from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../../helpers';
import { Header } from '../../layouts/MainPages/Header/Header';
import { Footer } from '../../layouts/MainPages/Footer/Footer';

export const MainRoute = () => {
  return (
    <>

            <Header />
            <Outlet/>
        <Footer />
        <ScrollToTop />
    </>
  );
}