import {combineReducers} from 'redux';
import gameBoard from './gameBoardReducer';
import baseBlue from './baseBlueReducer';
import baseGreen from './baseGreenReducer';
import baseYellow from './baseYellowReducer';
import baseRed from './baseRedReducer';
const rootReducer= combineReducers({
    gameBoard,
    baseBlue,
    baseGreen,
    baseYellow,
    baseRed
});

export default rootReducer;
