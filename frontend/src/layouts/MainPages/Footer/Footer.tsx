import React from 'react';
import { Link } from 'react-router-dom';
import shape1 from '../../../assets/images/home-banner/shape1.png';
import bgimage from '../../../assets/images/background/bg1.jpg';
import logowhite from '../../../assets/images/logo-white.png';
import flags from '../../../assets/images/footer/world-map-with-flags1.png';
import { socialMediaLinks } from '../Header/constants';
import { SocialMediaLinksList } from '../../../components/common/SocialMediaList/SocialMediaLinksList/SocialMediaLinksList';
import { LinksList } from '../../../components/common/LinksList/LinksList/LinksList';
import { linksList } from './constants';

export const Footer = () => {
  return (
    <>
      <footer className="site-footer style-1" id="footer">
        <img className="bg-shape1" src={shape1} alt="" />
        <div
          className="footer-top background-luminosity"
          style={{ backgroundImage: 'url(' + bgimage + ')' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-12 col-md-12">
                <div className="widget widget_about">
                  <div className="footer-logo logo-white">
                    <Link to={'/'}>
                      <img src={logowhite} alt="" />
                    </Link>
                  </div>
                  <p>
                    CryptoZone is a Crypto & Crypto Website by DexignZone lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  </p>
                  <SocialMediaLinksList
                    socialMediaLinks={socialMediaLinks}
                    wrapperClassName={'dz-social-icon transparent space-10'}
                  />
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <div className="widget widget_services">
                  <h4 className="widget-title">Other Links</h4>
                  <LinksList linksList={linksList} />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-12">
                <div className="widget widget_locations">
                  <h4 className="widget-title">Locations</h4>
                  <div className="clearfix">
                    <h6 className="title">Lviv</h6>
                    <p>Lviv, Ukraine</p>
                    <img src={flags} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
