import LogoDark from '../../assets/images/logo.png';
import LogoWhite from '../../assets/images/logo-white.png';

export const linksList = [
  { toHref: '/', linkTitle: 'Home' },
  { toHref: '/pricing', linkTitle: 'Pricing' },
  { toHref: '/contact-us', linkTitle: 'Contact Us' }
];

export const socialMediaLinks = [
  { className: 'fab fa-facebook-f', href: 'https://www.facebook.com/' },
  { className: 'fab fa-twitter', href: 'https://twitter.com/' },
  { className: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/' },
  { className: 'fab fa-instagram', href: 'https://www.instagram.com/' }
];

export const logoList = [
  { toHref: '/', className: 'logo-dark', imgSrc: LogoDark },
  { toHref: '/', className: 'logo-light', imgSrc: LogoWhite }
];

export const headerButtonsList = [
  { toHref: '/login', className: 'btn btn-outline-primary text-white', text: 'Log In' },
  { toHref: '/sign-up', className: 'btn btn-primary btn-gradient btn-shadow', text: 'Sign Up' }
];

export const logoDropDownNavBar = [{ toHref: '/', className: 'logo-dark', imgSrc: LogoDark }];
