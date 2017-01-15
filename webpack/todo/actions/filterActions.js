import actionTypes from "../constants/actionTypes.js";

export function completedTodoList(filter) {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter: filter
  };
}

