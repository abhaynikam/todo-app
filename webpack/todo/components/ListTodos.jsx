import { connect } from 'react-redux';
import { listTodos, destroyTodo, toggleTodo } from '../actions/todoActions';

class ListTodos extends React.Component {
  constructor(props) {
    super(props);
    this.destroyTodo = this.destroyTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  destroyTodo(event) {
    let todoId = event.target.dataset.identifier;
    this.props.dispatch(destroyTodo(todoId));
  }

  toggleTodo(event) {
    let todoId = event.target.dataset.identifier,
      completed = JSON.parse(event.target.dataset.completed);
    this.props.dispatch(toggleTodo(todoId, !completed));
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
              data-completed={item.completed}
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
      <div className="todoItems col-sm-12">
        <ul className="list-group col-sm-9">
          {this.renderTodoItems()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(
  mapStateToProps
)(ListTodos);
