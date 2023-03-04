import React from 'react';
import Shap1 from '../assets/images/home-banner/shape1.png';
import Shap3 from '../assets/images/home-banner/shape3.png';

export const BackgroundShape = () => {
  return (
    <>
      <img className="bg-shape2" src={Shap1} alt="" />
      <img className="bg-shape3" src={Shap1} alt="" />
      <img className="bg-shape1" src={Shap3} alt="" />
      <img className="bg-shape4" src={Shap3} alt="" />
    </>
  );
};
