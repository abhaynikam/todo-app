import { connect } from 'react-redux';
import ListTodos from '../components/ListTodos.jsx';
import actionTypes from '../constants/actionTypes.js';

const getFilteredTodos = (state, filter) => {
  switch(filter) {
    case actionTypes.COMPLETED_TODO_LIST:
      return state.filter(item => item.completed );
    case actionTypes.INCOMPLETE_TODO_LIST:
      return state.filter(item => !item.completed );
    case actionTypes.SHOW_ALL:
      return state;
    default:
      return state;
  }
}

const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state.todos, state.visibilityFilter)
})

export default connect(
  mapStateToProps
)(ListTodos);
