import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PriceList } from '../PriceList';
import pricingLiteIcon from '../../../assets/images/icons/pricing-lite-icon.svg';
import pricingProIcon from '../../../assets/images/icons/pricing-pro-icon.svg';
import pricingUltimateIcon from '../../../assets/images/icons/pricing-ultimate-icon.svg';
import { pricesList, pricingBlog } from '../constants';

export const PriceBlog = () => {
  const [hovered, setHovered] = useState(0);
  return (
    <>
      {pricingBlog.map((data, index) => (
        <div className="col-xl-4 col-lg-6 col-md-6 m-b30" key={index}>
          <div
            className={`pricingtable-wrapper box-hover style-1 ${
              index === hovered ? 'active' : ''
            }`}
            onMouseEnter={() => {
              setHovered(index);
            }}>
            <div className="pricingtable-inner">
              <div className="tagline">{data.contentTitle}</div>
              <h4 className="pricingtable-title">
                {index === 0 ? (
                  <img src={pricingLiteIcon} alt="" />
                ) : index === 1 ? (
                  <img src={pricingProIcon} alt="" />
                ) : index === 2 ? (
                  <img src={pricingUltimateIcon} alt="" />
                ) : (
                  ''
                )}{' '}
                {data.title}
              </h4>
              <p>Perfect to get started</p>
              <div className="pricingtable-price">
                <h2 className="pricingtable-bx text-primary">
                  {' '}
                  <span>$</span>
                  {data.price}
                  <small>/ Per Month</small>
                </h2>
                <div className="days-label bg-primary">Try 7 Days for free</div>
              </div>
              <PriceList priceList={pricesList} />
            </div>
            <div className="pricingtable-footer">
              <Link to={'/contact-us'} className="btn">
                See all features
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
