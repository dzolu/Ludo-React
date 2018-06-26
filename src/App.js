import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux'
import configureStore from './redux/store/configureStore';
import * as initialStateMock from './mocks/mockInitialState';
import Game from './components/Container/Game';


const store = configureStore(initialStateMock.twoPlayers);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                    <Game/>
            </Provider>
        );
    }
}

export default App;
