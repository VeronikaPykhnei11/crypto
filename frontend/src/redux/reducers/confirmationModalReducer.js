const initialConfirmationModalData= {
  isOpen: false,
};

export const confirmationModalReducer = (state = initialConfirmationModalData, action) => {
  switch (action.type) {
    case 'SET_MODAL_OPEN': {
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