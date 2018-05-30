import { COLOR_BLUE, COLOR_GREEN, COLOR_RED, COLOR_YELLOW } from '../Types/ColorTypes';


export const onePlayers={
    gameboard: new Array(54),
    baseBlue : [{id:1, color:COLOR_BLUE}, {id:2, color:COLOR_BLUE}, {id:3, color:COLOR_BLUE}, {id:4, color:COLOR_BLUE}],
    baseGreen : [],
    baseYellow : [],
    baseRed : [],
    homeYellow : [],
    homeRed : [],
    homeGreen : [],
    homeBlue : []
    
}
export const twoPlayers={
    gameBoard: new Array(54),
    baseBlue : [{id:1, color:COLOR_BLUE}, {id:2, color:COLOR_BLUE}, {id:3, color:COLOR_BLUE}, {id:4, color:COLOR_BLUE}],
    baseGreen :[{id:1, color:COLOR_GREEN},{id:2, color:COLOR_GREEN},{id:3, color:COLOR_GREEN},{id:4, color:COLOR_GREEN}],
    baseYellow :new Array(4),
    baseRed :new Array(4),
    // homeYellow : [],
    // homeRed : [],
    // homeGreen : [],
    // homeBlue : []
}
export const threePlayers={
    gameboard: new Array(54),
    baseBlue : [{id:1, color:COLOR_BLUE}, {id:2, color:COLOR_BLUE}, {id:3, color:COLOR_BLUE}, {id:4, color:COLOR_BLUE}],
    baseGreen :[{id:1, color:COLOR_GREEN},{id:2, color:COLOR_GREEN},{id:3, color:COLOR_GREEN},{id:4, color:COLOR_GREEN}],
    baseYellow :[{id:1, color:COLOR_YELLOW},{id:2, color:COLOR_YELLOW},{id:3, color:COLOR_YELLOW},{id:4, color:COLOR_YELLOW}],
    baseRed :[],
    homeYellow : [],
    homeRed : [],
    homeGreen : [],
    homeBlue : []
}
export const fourPlayers={
    gameboard: new Array(54),
    baseBlue : [{id:1, color:COLOR_BLUE}, {id:2, color:COLOR_BLUE}, {id:3, color:COLOR_BLUE}, {id:4, color:COLOR_BLUE}],
    baseGreen :[{id:1, color:COLOR_GREEN},{id:2, color:COLOR_GREEN},{id:3, color:COLOR_GREEN},{id:4, color:COLOR_GREEN}],
    baseYellow :[{id:1, color:COLOR_YELLOW},{id:2, color:COLOR_YELLOW},{id:3, color:COLOR_YELLOW},{id:4, color:COLOR_YELLOW}],
    baseRed :[{id:1, color:COLOR_RED},{id:2, color:COLOR_RED},{id:3, color:COLOR_RED},{id:4, color:COLOR_RED}],
    homeYellow : [],
    homeRed : [],
    homeGreen : [],
    homeBlue : []
}
