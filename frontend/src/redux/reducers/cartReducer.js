import { ADD_ITEM_TO_CART } from "../actions/actionTypes";


const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: [...state.items, action.item]
      };
    default:
      return state;
  }
};