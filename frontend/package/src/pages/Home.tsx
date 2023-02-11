import React from 'react';
import { Link } from 'react-router-dom';
import BannerCard from './../components/Home/BannerCard';
import OneStop from './../components/Home/OneStop';
import baner1 from './../assets/images/home-banner/img1.png';
import baner2 from './../assets/images/home-banner/img2.png';
import Shape1 from './../assets/images/home-banner/shape1.png';
import Shape3 from './../assets/images/home-banner/shape3.png';
import analysis from './../assets/images/icons/analysis.svg';
import visualization from './../assets/images/icons/visualization.svg';
import forecast from './../assets/images/icons/forecast.svg';
import userInterface from './../assets/images/icons/user-interface.svg';

const trustBlog = [
  { image: analysis, title: 'Buy Cryptocurrency with cash' },
  { image: visualization, title: 'Buy Cryptocurrency with cash' },
  { image: forecast, title: 'Buy Cryptocurrency with cash' },
  { image: userInterface, title: 'Cryptocurrency Consultancy' }
];

export const Home = () => {
  return (
    <>
      <div className="page-content">
        <div className="main-bnr style-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <h1>System for analytics, visualization and management of cryptocurrencies</h1>
                <p className="text text-primary ">Focus on your profit. While we save your time</p>
                <Link
                  to={'/about-us'}
                  className="btn space-lg btn-gradient btn-shadow btn-primary ">
                  Get Started
                </Link>
                <ul className="image-before">
                  <li className="left-img">
                    <img src={baner1} alt="" />
                  </li>
                  <li className="right-img">
                    <img src={baner2} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
          <img className="bg-shape2" src={Shape1} alt="" />
          <img className="bg-shape3" src={Shape3} alt="" />
          <img className="bg-shape4" src={Shape3} alt="" />
        </div>
        <div className="clearfix bg-primary-light">
          <div className="container">
            <div className="currancy-wrapper">
              <div className="row justify-content-center">
                <BannerCard />
              </div>
            </div>
          </div>
        </div>
        <section className="clearfix section-wrapper1 bg-primary-light">
          <div className="container">
            <div className="content-inner-1">
              <div className="section-head text-center">
                <h2 className="title">Why Trust Us?</h2>
                <p>
                  Trust comes from experience. Many of the pleased customers may function as a guide
                  for you.
                </p>
              </div>
              <div className="row">
                {trustBlog.map((data, ind) => (
                  <div className="col-lg-6 m-b30" key={ind}>
                    <div className="icon-bx-wraper style-2">
                      <div className="icon-media">
                        <img src={data.image} alt="" />
                      </div>
                      <div className="icon-content">
                        <h4 className="title">{data.title}</h4>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley.
                        </p>
                        <Link className="btn btn-primary btn-gradient btn-shadow" to={'/about-us'}>
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner bg-light icon-section section-wrapper2">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">
                One-stop solution to buy and sell{' '}
                <span className="text-primary"> cryptocurrency </span> with Cash
              </h2>
            </div>
            <div className="row sp60">
              <OneStop />
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
        </section>
      </div>
    </>
  );
};
