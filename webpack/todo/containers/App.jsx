import Index from './Index.jsx';
import { Provider } from 'react-redux';
import { store } from '../stores/configureStore';

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Index {...this.props} />
      </Provider>
    );
  }
}
