import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux'
import configureStore from './redux/store/configureStore';
import BoardContainer from './components/Container/Board.container';
import * as initialStateMock from './mocks/mockInitialState';
import DiceContainer from './components/Container/DiceContainer';

const store = configureStore(initialStateMock.fourPlayers);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10">
                            <BoardContainer/>
                        </div>
                        <div className="col-sm-2">
                            <DiceContainer/>
                        </div>
                    </div>


                </div>
            </Provider>
        );
    }
}

export default App;
