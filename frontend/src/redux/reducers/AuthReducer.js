const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
  },
  isAuthenticated: false,
  errorMessage: '',
  successMessage: '',
  showLoading: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_AUTHENTICATED': {
      const { isAuthenticated } = action.payload;

      return {
        ...state,
        isAuthenticated
      };
    }
    case 'SUCCESS_SIGN_IN': {
      const { firstName, lastName } = action.payload;

      return {
        ...state,
        user: {
          firstName,
          lastName,
        }
      };
    }
    case 'SUCCESS_SIGN_UP': {
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
}
