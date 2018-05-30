import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import  configureStore from './store/configureStore';
import BoardContainer from './Components/Container/Board.container';
import * as initialStateMock from './mocks/mockInitialState';
import DiceContainer from './Components/Container/DiceContainer';
const store = configureStore(initialStateMock.fourPlayers)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <BoardContainer/>
            <DiceContainer/>
          </div>
      </Provider>
    );
  }
}

export default App;
