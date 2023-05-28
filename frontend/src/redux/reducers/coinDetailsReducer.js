const initialCoinDetailsData= {
  symbol: 'BTCUSDT'
};

export const coinDetailsReducer = (state = initialCoinDetailsData, action) => {
  switch (action.type) {
    case 'SET_COIN_SYMBOL': {
      const { symbol } = action.payload;
      return {
        ...state,
        symbol
      };
    }
    default: {
      return state;
    }
  }
};