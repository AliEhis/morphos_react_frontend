import { ROBOTS_LIST, LOAD_ROBOTS } from "../actions/actionTypes";


const initialState = {
  isLoading: false,
  robots: [],
};

export const robotReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROBOTS:
      return {
        ...state,
        isLoading: true

      };
    case ROBOTS_LIST:
      return {
        ...state,
        robots: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};