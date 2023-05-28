import React from 'react';
import { Nav } from 'react-bootstrap';
import { SearchBar } from '../SearchBar/SearchBar';
import coinIcon from '../../../assets/images/icons/mockCoinCrypto.svg';
import './styled.scss';

export const CoinDetailsRowList = () => {
  const tabHeading = [
    {
      title: 'Bitcoin',
      keytype: 'bitcoin',
      changelog: 'bitcoin ms-0',
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'
    },
    {
      title: 'Ethereum',
      keytype: 'ethereum',
      changelog: 'etherum',
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
    },
    {
      title: 'Dash',
      keytype: 'dash',
      changelog: 'dash',
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/131.png'
    },
    {
      title: 'Litecoin',
      keytype: 'litecoin',
      changelog: 'litcoin',
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'
    },
    {
      title: 'Ripple',
      keytype: 'ripple',
      changelog: 'ripple',
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png'
    }
  ];
  return (
    <div className={'row'}>
      <div className={'col-xl-12'}>
        <div className="card-coin-nav-wrapper">
          <div className="coin-details-wrapper">
            <Nav as="ul" className="nav-pills">
              {tabHeading.map((item, index) => (
                <Nav.Item as="li" key={index} className={'nav-link-item'}>
                  <Nav.Link as="button" className={`${item.changelog}`} eventKey={item.keytype}>
                    <img width={'30px'} height={'30px'} src={item.icon} className={'coin-icon'} />
                    {item.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};
