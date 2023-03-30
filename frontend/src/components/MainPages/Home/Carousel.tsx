import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import coin4 from '../../../assets/images/coins/coin4.png';
import coin3 from '../../../assets/images/coins/coin3.png';
import coin1 from '../../../assets/images/coins/coin1.png';

const cardData = [
  { image: coin4, title: 'Bitcoin', subtitle: 'BTC', price: '16,048.40', percent: '-1.26' },
  { image: coin3, title: 'Ethereum', subtitle: 'ETH', price: '1,122.44', percent: '-1.55' },
  { image: coin1, title: 'Tether', subtitle: 'USDT', price: '1.00', percent: '0.0099' }
];

export const CarouselSection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px">
      <div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
        <div className="icon-bx-wraper style-1 box-hover">
          <div className="icon-media">
            <img src={cardData[0].image} alt="" />
            <div className="icon-info">
              <h5 className="title">{cardData[0].title}</h5>
              <span>{cardData[0].subtitle}</span>
            </div>
          </div>
          <div className="icon-content">
            <ul className="price">
              <li>
                <h6 className="mb-0 amount">${cardData[0].price}</h6>
                <span className={'percentage text-green'}>{cardData[0].percent}%</span>
              </li>
              <li>
                <span>Latest price</span>
                <span>24h change</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Carousel>
  );
};
