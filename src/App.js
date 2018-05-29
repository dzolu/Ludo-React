import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import  configureStore from './store/configureStore';
import BoardContainer from './Components/Container/Board.container';
import initialStateMock from './mocks/mockInitialState';
const store = configureStore(initialStateMock)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <BoardContainer/>
          </div>
      </Provider>
    );
  }
}

export default App;
