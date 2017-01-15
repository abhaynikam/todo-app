import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.addInputTodo = this.addInputTodo.bind(this);
  }

  addInputTodo(event) {
    let todoItem = this.refs.todosInput.value.trim();
    if(todoItem.length > 1) {
      this.props.dispatch(addTodo(todoItem));
      this.refs.todosInput.value = "";
    }
  }

  render() {
    return(
      <div className="col-sm-12 clearfix">
        <div className="form-group col-sm-9">
          <label htmlFor="todosInput"></label>
          <input
            className="form-control"
            id="todosInput"
            placeholder="Add Todo"
            ref="todosInput"
          />
        </div>
        <div className="col-sm-3">
          <a href="javascript:void(0);" onClick={this.addInputTodo}
            className="btn btn-primary col-sm-12 addTodoBtn"
          >
            Add Todo
          </a>
        </div>
      </div>
    );
  }
}

export default connect()(AddTodo);

