import React from 'react';

import { PageLayout } from '../../layouts/PageLayout';
import { PriceBlog } from '../../components/Pricing/PriceBlog';
import { BackgroundShape } from '../../layouts/BackgroundShape';

export const Pricing = () => {
  return (
    <>
      <div className="page-content">
        <PageLayout pageTitle="Pricing Table" />
      </div>
      <section className="content-inner pricing-plan-wrapper bg-primary-light">
        <BackgroundShape />
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title">Awesome Pricing Plan for Cryptocurrency Business</h2>
          </div>
          <div className="row justify-content-center">
            <PriceBlog />
          </div>
        </div>
      </section>
    </>
  );
};
