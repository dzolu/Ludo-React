import {
    COLOR_BLUE,
    COLOR_GREEN,
    COLOR_RED,
    COLOR_YELLOW
} from '../types/ColorTypes';
import {
    TYPE_BASE
} from "../types/PositionTypes"


const Board = {};
const bluePawns = {
    0: {
        id: 0,
        color: COLOR_BLUE,
        actions: [],
        positionIndex: 0,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
        
    },
    1: {
        id: 1,
        color: COLOR_BLUE,
        actions: [],
        positionIndex: 1,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    },
    2: {
        id: 2,
        color: COLOR_BLUE,
        actions: [],
        positionIndex: 2,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    },
    3: {
        id: 3,
        color: COLOR_BLUE,
        actions: [],
        positionIndex: 3,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    }
};
const bluePawns2 = [bluePawns[0], bluePawns[1], bluePawns[2], bluePawns[3]];

const redPawns = {
    0: {
        id: 0,
        color: COLOR_RED,
        actions: [],
        positionIndex: 0,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    },
    1: {
        id: 1,
        color: COLOR_RED,
        actions: [],
        positionIndex: 1,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    },
    2: {
        id: 2,
        color: COLOR_RED,
        actions: [],
        positionIndex: 2,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    },
    3: {
        id: 3,
        color: COLOR_RED,
        actions: [],
        positionIndex: 3,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    }
};

const redPawns2 = [redPawns[0], redPawns[1], redPawns[2], redPawns[3]];
const yellowPawns = {
    0: {
        id: 0,
        color: COLOR_YELLOW,
        actions: [],
        positionIndex: 0,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    },
    1: {
        id: 1,
        color: COLOR_YELLOW,
        actions: [],
        positionIndex: 1,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    },
    2: {
        id: 2,
        color: COLOR_YELLOW,
        actions: [],
        positionIndex: 2,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    },
    3: {
        id: 3,
        color: COLOR_YELLOW,
        actions: [],
        positionIndex: 2,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    }
};
const yellowPawns2 = [yellowPawns[0], yellowPawns[1], yellowPawns[2], yellowPawns[3]];
const greenPawns = {
    0: {
        id: 0,
        color: COLOR_GREEN,
        actions: [],
        positionIndex: 0,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    },
    1: {
        id: 1,
        color: COLOR_GREEN,
        actions: [],
        positionIndex: 1,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    },
    2: {
        id: 2,
        color: COLOR_GREEN,
        actions: [],
        positionIndex: 2,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    },
    3: {
        id: 3,
        color: COLOR_GREEN,
        actions: [],
        positionIndex: 3,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    }
};

const greenPawns2 = [greenPawns[0], greenPawns[1], greenPawns[2], greenPawns[3]];

export const onePlayers = {
    queue: [{
        id: 0,
        name: "Tom",
        pawns: bluePawns2,
        color: COLOR_BLUE

    } ],
    gameBoard: Board,
    baseBlue: bluePawns,
    baseGreen: {},
    baseYellow: {},
    baseRed: {},
    homeYellow: {},
    homeRed: {},
    homeGreen: {},
    homeBlue: {}
};
export const twoPlayers = {
    queue: [{
        id: 0,
        name: "Tom",
        pawns: bluePawns2,
        color: COLOR_BLUE 

    }, {
        id: 1,
        name: "Bob",
        pawns: redPawns2,
        color: COLOR_RED

    } ],
    gameBoard: Board,
    baseBlue: bluePawns,
    baseGreen: {},
    baseYellow: {},
    baseRed: redPawns,
    homeYellow: {},
    homeRed: {},
    homeGreen: {},
    homeBlue: {}
};
export const threePlayers = {
    queue: [{
        id: 0,
        name: "Tom",
        pawns: bluePawns2,
        color: COLOR_BLUE
         

    }, {
        id: 1,
        name: "Bob",
        pawns: redPawns2,
        color: COLOR_RED

    }, {
        id: 2,
        name: "Jim",
        pawns: yellowPawns2,
        color: COLOR_YELLOW

    } ],
    gameBoard: Board,
    baseBlue: bluePawns,
    baseGreen: {},
    baseYellow: yellowPawns,
    baseRed: redPawns,
    homeYellow: {},
    homeRed: {},
    homeGreen: {},
    homeBlue: {}
};
export const fourPlayers = {
    queue: [{
        id: 0,
        name: "Tom",
        pawns: bluePawns2        ,
        color: COLOR_BLUE

    }, {
        id: 1,
        name: "Bob",
        pawns: redPawns2,
        color: COLOR_RED

    }, {
        id: 2,
        name: "Jim",
        pawns: yellowPawns2,
        color: COLOR_YELLOW

    }, {
        id: 3,
        name: "Tim",
        pawns: greenPawns2,
        color: COLOR_GREEN

    }, ],
    gameBoard: Board,
    baseBlue: bluePawns,
    baseGreen: greenPawns,
    baseYellow: yellowPawns,
    baseRed: redPawns,
    homeYellow: {},
    homeRed: {},
    homeGreen: {},
    homeBlue: {}
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