import React from 'react';
import bg6 from '../../../assets/images/background/bg6.jpg';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo-dark.png';
import { SocialMediaLinksList } from '../../../components/common/SocialMediaList/SocialMediaLinksList/SocialMediaLinksList';
import { socialMediaLinks } from '../../../layouts/MainPages/Header/constants';
import { LoginRightsSection } from '../../../components/MainPages/Login/LoginRightsSection';
import { SignUpForm } from '../../../components/MainPages/SignUp/SignUpForm';

const SignUp = () => {
  return (
    <div className="browse-job login-style3">
      <div
        className="bg-img-fix overflow-hidden"
        style={{ background: '#fff url(' + bg6 + ')', height: '100vh' }}>
        <div className="row gx-0">
          <div className="col-xl-4 col-lg-5 col-md-8 col-sm-12 vh-100 bg-white ">
            <div
              id="mCSB_1"
              className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
              style={{ maxHeight: '653px' }}>
              <div
                id="mCSB_1_container"
                className="mCSB_container"
                style={{ position: 'relative', top: '0', left: '0' }}>
                <div className="login-form style-2">
                  <div className="card-body d-flex flex-column login-form-body">
                    <div className="logo-header">
                      <Link to={'/'} className="logo">
                        <img src={logo} alt="" className="width-230 mCS_img_loaded" />
                      </Link>
                    </div>
                    <div className="nav nav-tabs border-bottom-0">
                      <div className="tab-content w-100" id="nav-tabContent">
                        <p> Welcome Back. Please login to your account. </p>
                        <SignUpForm />
                        <div className={'sign-in-social-media-wrapper'}>
                          <h5 className="form-title fs-20">Sign In With</h5>
                          <SocialMediaLinksList
                            socialMediaLinks={socialMediaLinks}
                            wrapperClassName={'social-media-box'}
                          />
                        </div>
                        <div className="text-center bottom">
                          <p>Don't have an account yet?</p>
                          <NavLink
                            to="/page-register"
                            className="btn btn-primary button-md btn-block w-100">
                            Create an account
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <LoginRightsSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
