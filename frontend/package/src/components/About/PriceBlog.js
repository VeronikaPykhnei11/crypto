import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pricingLiteIcon from '../../assets/images/icons/pricing-lite-icon.svg';
import pricingProIcon from '../../assets/images/icons/pricing-pro-icon.svg';
import pricingUltimateIcon from '../../assets/images/icons/pricing-ultimate-icon.svg';

const PriceList = () => {
  return (
    <>
      <ul className="pricingtable-features">
        <li>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"
              fill="#9467FE"
            />
          </svg>
          <span>Review Your Question</span>
        </li>
        <li>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"
              fill="#9467FE"
            />
          </svg>
          <span>Analysis of Your "I Have"</span>
        </li>
        <li>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"
              fill="#9467FE"
            />
          </svg>
          <span>Work with Resources</span>
        </li>
        <li>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"
              fill="#9467FE"
            />
          </svg>
          <span>Analysis of Your "I Have"</span>
        </li>
        <li>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"
              fill="#9467FE"
            />
          </svg>
          <span>Support & Mentoring</span>
        </li>
      </ul>
    </>
  );
};

const pricingBlog = [
  { price: '11', title: 'Lite', title2: 'Life-includes:' },
  {
    price: '21',
    title: 'Pro',
    content: <div className="tagline">POPULER</div>,
    title2: 'Everythings in Lite, Plus'
  },
  { price: '32', title: 'Ultimate', title2: 'Everythings in Lite' }
];

const PriceBlog = () => {
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
              {data.content}
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
              <PriceList />
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
export default PriceBlog;
