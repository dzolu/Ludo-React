import { COLOR_BLUE, COLOR_GREEN } from '../Types/ColorTypes';

export const initialStateMock={
    gameBoard: new Array(54),
    baseBlue : [{id:1, color:COLOR_BLUE}, {id:2, color:COLOR_BLUE}, {id:3, color:COLOR_BLUE}, {id:4, color:COLOR_BLUE}],
    baseGreen :[{id:1, color:COLOR_GREEN},{id:2, color:COLOR_GREEN},{id:3, color:COLOR_GREEN},{id:4, color:COLOR_GREEN}],
    baseYellow :null,
    baseRed :null
}
