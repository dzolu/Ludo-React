import {
    COLOR_BLUE,
    COLOR_GREEN,
    COLOR_RED,
    COLOR_YELLOW
} from '../types/ColorTypes';
import {
    TYPE_BASE,
    TYPE_BOARD
} from '../types/PositionTypes';


const bluePawns = {
    0: {
        id: 0,
        color: COLOR_BLUE,
        movement: [],
        positionIndex: 0,
        nextPositionIndex: 0,
        positionType: TYPE_BOARD,
        nextPositionType: TYPE_BOARD,
        counter: 0

    },
    1: {
        id: 1,
        color: COLOR_BLUE,
        movement: [],
        positionIndex: 1,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    },
    2: {
        id: 2,
        color: COLOR_BLUE,
        movement: [],
        positionIndex: 2,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    },
    3: {
        id: 3,
        color: COLOR_BLUE,
        movement: [],
        positionIndex: 3,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    }
};
const bluePawns2 = [bluePawns[0], bluePawns[1], bluePawns[2], bluePawns[3]];

const redPawns = {
    0: {
        id: 0,
        color: COLOR_RED,
        movement: [],
        positionIndex: 0,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    },
    1: {
        id: 1,
        color: COLOR_RED,
        movement: [],
        positionIndex: 1,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    },
    2: {
        id: 2,
        color: COLOR_RED,
        movement: [],
        positionIndex: 2,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    },
    3: {
        id: 3,
        color: COLOR_RED,
        movement: [],
        positionIndex: 3,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    }
};

const redPawns2 = [redPawns[0], redPawns[1], redPawns[2], redPawns[3]];
const yellowPawns = {
    0: {
        id: 0,
        color: COLOR_YELLOW,
        movement: [],
        positionIndex: 0,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    },
    1: {
        id: 1,
        color: COLOR_YELLOW,
        movement: [],
        positionIndex: 1,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    },
    2: {
        id: 2,
        color: COLOR_YELLOW,
        movement: [],
        positionIndex: 2,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    },
    3: {
        id: 3,
        color: COLOR_YELLOW,
        movement: [],
        positionIndex: 2,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    }
};
const yellowPawns2 = [yellowPawns[0], yellowPawns[1], yellowPawns[2], yellowPawns[3]];
const greenPawns = {
    0: {
        id: 0,
        color: COLOR_GREEN,
        movement: [],
        positionIndex: 0,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    },
    1: {
        id: 1,
        color: COLOR_GREEN,
        movement: [],
        positionIndex: 1,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    },
    2: {
        id: 2,
        color: COLOR_GREEN,
        movement: [],
        positionIndex: 2,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    },
    3: {
        id: 3,
        color: COLOR_GREEN,
        movement: [],
        positionIndex: 3,
        nextPositionIndex: 0,
        positionType: TYPE_BASE,
        nextPositionType: TYPE_BASE,
        counter: 0
    }
};

const greenPawns2 = [greenPawns[0], greenPawns[1], greenPawns[2], greenPawns[3]];
const Board = {0: bluePawns[0]};


//players
const tom = {
    id: 0,
    name: "Tom",
    pawns: bluePawns2,
    color: COLOR_BLUE,
    madeMove: false,
    throwDice: false

};
const bob = {
    id: 1,
    name: "Bob",
    pawns: redPawns2,
    color: COLOR_RED,
    madeMove: false,
    throwDice: false

};

const jim = {
    id: 2,
    name: "Jim",
    pawns: yellowPawns2,
    color: COLOR_YELLOW,
    madeMove: false,
    throwDice: false

};
const tim = {
    id: 3,
    name: "Tim",
    pawns: greenPawns2,
    color: COLOR_GREEN,
    madeMove: false,
    throwDice: false

};
export const onePlayers = {
    queue: [tom],
    gameBoard: Board,
    baseBlue: {},
    baseGreen: {},
    baseYellow: {},
    baseRed: {},
    homeYellow: {},
    homeRed: {},
    homeGreen: {},
    homeBlue: {}
};
export const twoPlayers = {
    queue: [tom, bob],
    gameBoard: Board,
    baseBlue: {
        1: {
            id: 1,
            color: COLOR_BLUE,
            movement: [],
            positionIndex: 1,
            nextPositionIndex: 0,
            positionType: TYPE_BASE,
            nextPositionType: TYPE_BASE,
            counter: 0
        },
        2: {
            id: 2,
            color: COLOR_BLUE,
            movement: [],
            positionIndex: 2,
            nextPositionIndex: 0,
            positionType: TYPE_BASE,
            nextPositionType: TYPE_BASE,
            counter: 0
        },
        3: {
            id: 3,
            color: COLOR_BLUE,
            movement: [],
            positionIndex: 3,
            nextPositionIndex: 0,
            positionType: TYPE_BASE,
            nextPositionType: TYPE_BASE,
            counter: 0
        }
    },
    baseGreen: {},
    baseYellow: {},
    baseRed: redPawns,
    homeYellow: {},
    homeRed: {},
    homeGreen: {},
    homeBlue: {}
};
export const threePlayers = {
    queue: [tom, bob, jim],
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
    queue: [tom, bob, jim, tim],
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