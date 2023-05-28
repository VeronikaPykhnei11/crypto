const initialSideBarData = {
  isOpen: true
};

export const sideBarReducer = (state = initialSideBarData, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR': {
      const { isOpen } = action.payload;

      return {
        ...state,
        isOpen
      };
    }
    default: {
      return state;
    }
  }
};