import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Switcher from './components/Switcher'

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className='box'>
          <h1>Приложение для переключения темы сайта</h1>
          <Switcher />
        </div>
      </div>
    </Provider>
  );
}

export default App;
