import { AnyAction } from 'redux';

const initialSideBarData = {
  isOpen: true
};

const initialActivePageData = {
  title: 'Dashboard'
};

export const sideBarReducer = (state = initialSideBarData, action: AnyAction) => {
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

export const activePageReducer = (state = initialActivePageData, action: AnyAction) => {
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
