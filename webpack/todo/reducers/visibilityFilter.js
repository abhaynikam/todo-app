import actionTypes from "../constants/actionTypes";
import Immutable from "immutable";

export function visibilityFilterReducer(state = "SHOW_ALL", action) {
  switch(action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilterReducer;