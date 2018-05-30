import {combineReducers} from 'redux';
import gameboard from './gameboardReducer';
import baseblue from './baseblueReducer';
import basegreen from './basegreenReducer';
import baseyellow from './baseyellowReducer';
import basered from './baseredReducer';
const rootReducer= combineReducers({
    gameboard,
    baseblue,
    basegreen,
    baseyellow,
    basered
});

export default rootReducer;
