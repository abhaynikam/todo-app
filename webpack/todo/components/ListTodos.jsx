import { connect } from 'react-redux';
import { listTodos, destroyTodo, toggleTodo } from '../actions/todoActions';
import { completedTodoList } from '../actions/filterActions';

class ListTodos extends React.Component {
  constructor(props) {
    super(props);
    this.destroyTodo = this.destroyTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.handleTodoListFilter = this.handleTodoListFilter.bind(this);
  }

  destroyTodo(event) {
    let todoId = event.target.dataset.identifier;
    this.props.dispatch(destroyTodo(todoId));
  }

  toggleTodo(event) {
    let todoId = event.target.dataset.identifier;
    this.props.dispatch(toggleTodo(todoId));
  }

  handleTodoListFilter(event) {
    let filterType = event.target.dataset.filter;
    this.props.dispatch(completedTodoList(filterType));
  }

  getTodoItem(item) {
    if(item.completed) {
      return(<strike className="item pull-left">{item.text}</strike>);
    } else {
      return(<span className="item pull-left">{item.text}</span>);
    }
  }

  renderTodoItems() {
    let that = this;
    return(
      this.props.todos.map((item) => {
        return(
          <li key={item.id} className="list-group-item todoListElement">
            {that.getTodoItem(item)}
            <a href="javascript:void(0);" data-identifier={item.id} onClick={this.destroyTodo} className="pull-right deleteTodo glyphicon glyphicon-trash">
              Delete
            </a>
            <a href="javascript:void(0);"
              data-identifier={item.id}
              onClick={this.toggleTodo}
              className="pull-right deleteTodo glyphicon glyphicon-ok"
            >
              { item.completed ? 'Not Complete' : 'Complete' }
            </a>
          </li>
        )
      })
    );
  }

  render() {
    return(
      <div className="todosContainer">
        <div className="todoFilterContainer col-sm-12">
          <a href="javascript:void(0);"
            data-filter="COMPLETED_TODO_LIST"
            className="completedTodoAction col-sm-4"
            onClick={this.handleTodoListFilter}
          >
            Completed Todo List
          </a>
          <a href="javascript:void(0);"
            data-filter="INCOMPLETE_TODO_LIST"
            className="completedTodoAction col-sm-4"
            onClick={this.handleTodoListFilter}
          >
            InCompleted Todo List
          </a>
          <a href="javascript:void(0);"
            data-filter="SHOW_ALL"
            className="completedTodoAction col-sm-4"
            onClick={this.handleTodoListFilter}
          >
            Show All
          </a>
        </div>
        <div className="todoItems col-sm-12">
          <ul className="list-group col-sm-9">
            {this.renderTodoItems()}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListTodos;
