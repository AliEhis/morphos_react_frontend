import { ROBOTS_LIST, LOAD_ROBOTS, ADD_ITEM_TO_CART, REDUCE_ROBOT_STOCK, UPDATE_STOCK_COUNT, FILTER_ROBOTS } from "../actions/actionTypes";
import { verifyItemInCart, reduceRobotStock, updateStockCount, updateCart, filterRobots } from '../../functions'

const initialState = {
  isLoading: false,
  robots: [],
  allRobots: [],
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
        allRobots: action.payload,
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
        robots: reduceRobotStock(state.allRobots, action.itemId)
      };
    case UPDATE_STOCK_COUNT:
      return {
        ...state,
        cartItems: updateCart(state.allRobots, state.cartItems, action.payload), // update item stock
        robots: updateStockCount(state.allRobots, action.payload) // update the stock on the robot list
      };
    case FILTER_ROBOTS:
      return {
        ...state,
        robots: filterRobots(state.allRobots, action.material), // filter robots list
      };
    default:
      return state;
  }
};
