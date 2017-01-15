import actionTypes from '../constants/actionTypes';

let nextTodoId = 0;

export function addTodo(text) {
  return {
    type: actionTypes.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export function listTodos() {
  return {
    type: actionTypes.LIST_TODOS
  }
}

export function destroyTodo(identifier) {
  return {
    type: actionTypes.DESTROY_TODO,
    identifier: identifier
  };
}

export function toggleTodo(identifier) {
  return {
    type: actionTypes.COMPLETED_TODO,
    identifier: identifier
  };
}

