import {COLOR_BLUE, COLOR_GREEN, COLOR_RED, COLOR_YELLOW} from '../types/ColorTypes';
import {TYPE_BASE, TYPE_BOARD} from "../types/PositionTypes"

const temp={id: 1, color: COLOR_YELLOW,  actionName: "", positionIndex: 0, positionType: TYPE_BOARD, actions:{addAction:(obj)=>{this.actionName="yellow_BEAT_PAWN"}}}
const Board = {1:temp, 2:temp, 3:temp,4:temp, 5:temp, 6:temp, 7:temp};
const bluePawns = {
    0: {id: 0, color: COLOR_BLUE},
    1: {id: 1, color: COLOR_BLUE},
    2: {id: 2, color: COLOR_BLUE},
    3: {id: 3, color: COLOR_BLUE}
};

const redPawns = {
    0: {id: 0, color: COLOR_RED, actions: [], positionIndex: 0, positionType: TYPE_BASE},
    1: {id: 1, color: COLOR_RED, actions: [], positionIndex: 1, positionType: TYPE_BASE},
    2: {id: 2, color: COLOR_RED, actions: [], positionIndex: 2, positionType: TYPE_BASE},
    3: {id: 3, color: COLOR_RED, actions: [], positionIndex: 3, positionType: TYPE_BASE}
};
const yellowPawns = {
    0: {id: 0, color: COLOR_YELLOW},
    1: {id: 1, color: COLOR_YELLOW},
    2: {id: 2, color: COLOR_YELLOW},
    3: {id: 3, color: COLOR_YELLOW}
};
const greenPawns = {
    0: {id: 0, color: COLOR_GREEN},
    1: {id: 1, color: COLOR_GREEN},
    2: {id: 2, color: COLOR_GREEN},
    3: {id: 3, color: COLOR_GREEN}
};

export const onePlayers = {
    gameBoard: {},
    baseBlue: bluePawns,
    baseGreen: [],
    baseYellow: [],
    baseRed: [],
    homeYellow: [],
    homeRed: [],
    homeGreen: [],
    homeBlue: {}

};
export const twoPlayers = {
    gameBoard: {},
    baseBlue: bluePawns,
    baseGreen: greenPawns,
    baseYellow: {},
    baseRed: {},
    homeYellow: {},
    homeRed: {},
    homeGreen: {},
    homeBlue: {}
};
export const threePlayers = {
    gameBoard: {},
    baseBlue: bluePawns,
    baseGreen: greenPawns,
    baseYellow: yellowPawns,
    baseRed: [],
    homeYellow: {},
    homeRed: [],
    homeGreen: {},
    homeBlue: {}
};
export const fourPlayers = {
    gameBoard: Board,
    baseBlue: bluePawns,
    baseGreen: greenPawns,
    baseYellow: yellowPawns,
    baseRed: redPawns,
    homeYellow: {},
    homeRed: {},
    homeGreen: {},
    homeBlue: {},
    player: {pawns: redPawns}
};

export const allInHome = {
    gameBoard: {},
    baseBlue: {},
    baseGreen: {},
    baseYellow: {},
    baseRed: {},
    homeYellow: yellowPawns,
    homeRed: redPawns,
    homeGreen: greenPawns,
    homeBlue: bluePawns
};
