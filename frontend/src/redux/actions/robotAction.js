import * as types from "./actionTypes";
import Swal from 'sweetalert2'

const RobotLists = (robots) => ({
  type: types.ROBOTS_LIST,
  payload: robots
})

export const getRobots = () => async (dispatch) => {
  dispatch({ type: types.LOAD_ROBOTS });
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/robots`, {
      method: "GET"
    })
    const { data } = await response.json();
    if (data) {
      dispatch(RobotLists(data))
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
    // send error message to sentry
  }
}

export const addToCart = (item) => async (dispatch) => {
  dispatch({ type: types.ADD_ITEM_TO_CART, item });
}

export const reduceRobotStock = (id) => async (dispatch) => {
  dispatch({ type: types.REDUCE_ROBOT_STOCK, itemId: id })
}

export const updateStockCount = (payload) => async (dispatch) => {
  dispatch({ type: types.UPDATE_STOCK_COUNT, ...payload })
}
