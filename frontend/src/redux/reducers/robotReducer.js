import { ROBOTS_LIST, LOAD_ROBOTS, ADD_ITEM_TO_CART, REDUCE_ROBOT_STOCK } from "../actions/actionTypes";

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

const verifyItemInCart = (cartItems, payload) => {
  const { id, name, price } = payload
  let itemExist = cartItems.find(item => item.id === id)
  if (itemExist) {
    itemExist.stock = itemExist.stock > 0 ? itemExist.stock + 1 : 1
  } else {
    if (cartItems.length < 5) {
      cartItems = [...cartItems, { id, name, price, stock: 1 }]
    } else {
      alert("You can only add 5 robots")
    }
  }
  return cartItems
}

const reduceRobotStock = (robots, itemId) => {
  const robotExist = robots.find(robot => robot.id == itemId)
  robotExist.stock = robotExist.stock == 0 ? 0 : robotExist.stock - 1
  return robots
}