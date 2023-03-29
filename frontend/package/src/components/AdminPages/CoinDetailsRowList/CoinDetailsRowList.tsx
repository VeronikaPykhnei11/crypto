import React from 'react';
import { Nav } from 'react-bootstrap';
import { SearchBar } from '../SearchBar/SearchBar';
import coinIcon from '../../../assets/images/icons/mockCoinCrypto.svg';
import './styled.scss';

export const CoinDetailsRowList = () => {
  const tabHeading = [
    { title: 'Bitcoin', keytype: 'bitcoin', changelog: 'bitcoin ms-0', icon: coinIcon },
    { title: 'Ethereum', keytype: 'ethereum', changelog: 'etherum', icon: coinIcon },
    { title: 'Dash', keytype: 'dash', changelog: 'dash', icon: coinIcon },
    { title: 'Litecoin', keytype: 'litecoin', changelog: 'litcoin', icon: coinIcon },
    { title: 'Ripple', keytype: 'ripple', changelog: 'ripple', icon: coinIcon }
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
                    <img src={item.icon} className={'coin-icon'} />
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
