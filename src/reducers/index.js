import {combineReducers} from 'redux';
import gameBoard from './gameBoardReducer';
import baseBlue from './baseBlueReducer';
import baseGreen from './baseGreenReducer';
import baseYellow from './baseYellowReducer';
import baseRed from './baseRedReducer';
import homeYellow from './homeYellowReducer';
import homeBlue from './homeBlueReducer';
import homeGreen from './homeGreenReducer';
import homeRed from './homeRedReducer';
import diceResult from './diceResultReducer';
import player from "./playerReducer";

const rootReducer = combineReducers({
    gameBoard,
    baseBlue,
    baseGreen,
    baseYellow,
    baseRed,
    homeYellow,
    homeBlue,
    homeGreen,
    homeRed,
    diceResult,
    player
});

export default rootReducer;
