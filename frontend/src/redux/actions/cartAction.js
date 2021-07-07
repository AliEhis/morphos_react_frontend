import * as types from "./actionTypes";

export const addToCart = (item) => async (dispatch) => {
  dispatch({ type: types.ADD_ITEM_TO_CART, item });
}
