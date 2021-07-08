import { ROBOTS_LIST, LOAD_ROBOTS, ADD_ITEM_TO_CART, REDUCE_ROBOT_STOCK } from "../actions/actionTypes";
import { verifyItemInCart, reduceRobotStock } from '../../utilityFunction'

const initialState = {
  isLoading: false,
  robots: [],
  cartItems: []
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
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: verifyItemInCart(state.cartItems, action.item)
      };
    case REDUCE_ROBOT_STOCK:
      return {
        ...state,
        robots: reduceRobotStock(state.robots, action.itemId)
      };
    default:
      return state;
  }
};
