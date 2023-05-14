import tradingIcon from '../../../assets/images/icons/trading.svg';
import cryptoCurrencyIcon from '../../../assets/images/icons/cryptocurrency.svg';
import chartIcon from '../../../assets/images/icons/chart.svg';
import dashboardIcon from '../../../assets/images/icons/grid-2-x-2.svg';

export const MenuList = [
  {
    title: 'Dashboard',
    classsChange: 'mm-collapse',
    iconStyle: dashboardIcon,
    toHref: '/admin/dashboard'
  },
  //Trading
  {
    title: 'Trading',
    classsChange: 'mm-collapse',
    iconStyle: tradingIcon,
    content: [
      {
        title: 'Market',
        to: 'market'
      },
      {
        title: 'ICO Listing',
        to: 'ico-listing'
      },
      {
        title: 'Future',
        to: 'future'
      },
      {
        title: 'Intraday Trading',
        to: 'intraday-trading'
      }
    ]
  },
  //Crypto
  {
    title: 'Crypto',
    classsChange: 'mm-collapse',
    iconStyle: cryptoCurrencyIcon,
    content: [
      {
        title: 'Coin List',
        to: '/admin/crypto'
      },
      {
        title: 'Coin Details',
        to: '/admin/coin-details'
      },
      {
        title: 'Exchange',
        to: 'exchange'
      }
    ]
  },
  //Charts
  {
    title: 'Charts',
    classsChange: 'mm-collapse',
    iconStyle: chartIcon,
    content: [
      {
        title: 'RechartJs',
        to: 'chart-rechart'
      },
      {
        title: 'Chartjs',
        to: 'chart-chartjs'
      },
      {
        title: 'Sparkline',
        to: 'chart-sparkline'
      },
      {
        title: 'Apexchart',
        to: 'chart-apexchart'
      }
    ]
  }
];
