import { COLOR_BLUE, COLOR_GREEN, COLOR_RED, COLOR_YELLOW } from '../Types/ColorTypes';


export const onePlayers={
    gameBoard: new Array(54),
    baseBlue : [{id:1, color:COLOR_BLUE}, {id:2, color:COLOR_BLUE}, {id:3, color:COLOR_BLUE}, {id:4, color:COLOR_BLUE}],
    baseGreen : [],
    baseYellow : [],
    baseRed : [],
    homeYellow : [],
    homeRed : [],
    homeGreen : [],
    homeBlue :  new Array(4)
    
}
export const twoPlayers={
    gameBoard: new Array(54),
    baseBlue : [{id:1, color:COLOR_BLUE}, {id:2, color:COLOR_BLUE}, {id:3, color:COLOR_BLUE}, {id:4, color:COLOR_BLUE}],
    baseGreen :[{id:1, color:COLOR_GREEN},{id:2, color:COLOR_GREEN},{id:3, color:COLOR_GREEN},{id:4, color:COLOR_GREEN}],
    baseYellow :new Array(4),
    baseRed :new Array(4),
    homeYellow :new Array(4),
    homeRed : new Array(4),
    homeGreen : new Array(4),
    homeBlue : new Array(4)
}
export const threePlayers={
    gameBoard: new Array(54),
    baseBlue : [{id:1, color:COLOR_BLUE}, {id:2, color:COLOR_BLUE}, {id:3, color:COLOR_BLUE}, {id:4, color:COLOR_BLUE}],
    baseGreen :[{id:1, color:COLOR_GREEN},{id:2, color:COLOR_GREEN},{id:3, color:COLOR_GREEN},{id:4, color:COLOR_GREEN}],
    baseYellow :[{id:1, color:COLOR_YELLOW},{id:2, color:COLOR_YELLOW},{id:3, color:COLOR_YELLOW},{id:4, color:COLOR_YELLOW}],
    baseRed :[],
    homeYellow :  new Array(4),
    homeRed : [],
    homeGreen :  new Array(4),
    homeBlue :  new Array(4)
}
export const fourPlayers={
    gameBoard: new Array(54),
    baseBlue : [{id:1, color:COLOR_BLUE}, {id:2, color:COLOR_BLUE}, {id:3, color:COLOR_BLUE}, {id:4, color:COLOR_BLUE}],
    baseGreen :[{id:1, color:COLOR_GREEN},{id:2, color:COLOR_GREEN},{id:3, color:COLOR_GREEN},{id:4, color:COLOR_GREEN}],
    baseYellow :[{id:1, color:COLOR_YELLOW},{id:2, color:COLOR_YELLOW},{id:3, color:COLOR_YELLOW},{id:4, color:COLOR_YELLOW}],
    baseRed: {0:{id:1, color:COLOR_RED},1:{id:2, color:COLOR_RED},2:{id:3, color:COLOR_RED},3:{id:4, color:COLOR_RED}},
    homeYellow :  new Array(4),
    homeRed :  new Array(4),
    homeGreen :  new Array(4),
    homeBlue :  new Array(4)
}

export const allInHome={
    gameBoard: new Array(54),
    baseBlue :  new Array(4),
    baseGreen : new Array(4),
    baseYellow : new Array(4),
    baseRed : new Array(4),
    homeYellow : [{id:1, color:COLOR_YELLOW},{id:2, color:COLOR_YELLOW},{id:3, color:COLOR_YELLOW},{id:4, color:COLOR_YELLOW}],
    homeRed : [{id:1, color:COLOR_RED},{id:2, color:COLOR_RED},{id:3, color:COLOR_RED},{id:4, color:COLOR_RED}],
    homeGreen : [{id:1, color:COLOR_GREEN},{id:2, color:COLOR_GREEN},{id:3, color:COLOR_GREEN},{id:4, color:COLOR_GREEN}],
    homeBlue : [{id:1, color:COLOR_BLUE}, {id:2, color:COLOR_BLUE}, {id:3, color:COLOR_BLUE}, {id:4, color:COLOR_BLUE}]
}
