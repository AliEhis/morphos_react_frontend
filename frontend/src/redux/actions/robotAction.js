import * as types from "./actionTypes";

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
    alert("Oops something went wrong")
    // send error message to sentry
  }
}
