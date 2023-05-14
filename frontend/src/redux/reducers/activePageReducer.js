const initialActivePageData = {
  title: 'Dashboard'
};

export const activePageReducer = (state = initialActivePageData, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_PAGE_TITLE': {
      const { title } = action.payload;
      return {
        ...state,
        title
      };
    }
    default: {
      return state;
    }
  }
};
