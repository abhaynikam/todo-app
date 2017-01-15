import AddTodo from '../components/AddTodo.jsx';
import ListTodos from '../components/ListTodos.jsx';

export default class Index extends React.Component {
  render() {
    return(
      <div className="container">
        <AddTodo />
        <ListTodos />
      </div>
    );
  }
}
