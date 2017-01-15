import actionTypes from "../constants/actionTypes";
import Immutable from "immutable";

const initialState = Immutable.Map();

export default function todos(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, todo(undefined, action)];
    case actionTypes.LIST_TODOS:
      return state;
    case actionTypes.DESTROY_TODO:
      return todo(state, action);
    case actionTypes.COMPLETED_TODO:
      return state.map((item) => {
        return todo(item, action);
      });
    default:
      return state
  }
}

const todo = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case actionTypes.DESTROY_TODO:
      return state.filter((item) => { return item.id != action.identifier });
    case actionTypes.COMPLETED_TODO:
      if(state.id !== parseInt(action.identifier)) {
        return state;
      }
      return {
        id: state.id,
        text: state.text,
        completed: !state.completed
      };
    default:
      return state;
  }
};
