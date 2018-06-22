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
        color: COLOR_BLUE
    },
    1: {
        id: 1,
        color: COLOR_BLUE
    },
    2: {
        id: 2,
        color: COLOR_BLUE
    },
    3: {
        id: 3,
        color: COLOR_BLUE
    }
};
const bluePawns2 = [{
        id: 0,
        color: COLOR_BLUE
    },
    {
        id: 1,
        color: COLOR_BLUE
    },
    {
        id: 2,
        color: COLOR_BLUE
    },
    {
        id: 3,
        color: COLOR_BLUE
    }
];

const redPawns = {
    0: {
        id: 0,
        color: COLOR_RED,
        actions: [],
        positionIndex: 0,
        positionType: TYPE_BASE,
        counter: 0
    },
    1: {
        id: 1,
        color: COLOR_RED,
        actions: [],
        positionIndex: 1,
        positionType: TYPE_BASE,
        counter: 0
    },
    2: {
        id: 2,
        color: COLOR_RED,
        actions: [],
        positionIndex: 2,
        positionType: TYPE_BASE,
        counter: 0
    },
    3: {
        id: 3,
        color: COLOR_RED,
        actions: [],
        positionIndex: 3,
        positionType: TYPE_BASE,
        counter: 0
    }
};

const redPawns2 = [{
        id: 0,
        color: COLOR_RED,
        actions: [],
        positionIndex: 0,
        positionType: TYPE_BASE,
        counter: 0
    },
    {
        id: 1,
        color: COLOR_RED,
        actions: [],
        positionIndex: 1,
        positionType: TYPE_BASE,
        counter: 0
    },
    {
        id: 2,
        color: COLOR_RED,
        actions: [],
        positionIndex: 2,
        positionType: TYPE_BASE,
        counter: 0
    },
    {
        id: 3,
        color: COLOR_RED,
        actions: [],
        positionIndex: 3,
        positionType: TYPE_BASE,
        counter: 0
    }
];
const yellowPawns = {
    0: {
        id: 0,
        color: COLOR_YELLOW
    },
    1: {
        id: 1,
        color: COLOR_YELLOW
    },
    2: {
        id: 2,
        color: COLOR_YELLOW
    },
    3: {
        id: 3,
        color: COLOR_YELLOW
    }
};
const yellowPawns2 = [{
        id: 0,
        color: COLOR_YELLOW
    },
    {
        id: 1,
        color: COLOR_YELLOW
    },
    {
        id: 2,
        color: COLOR_YELLOW
    },
    {
        id: 3,
        color: COLOR_YELLOW
    }
];
const greenPawns = {
    0: {
        id: 0,
        color: COLOR_GREEN
    },
    1: {
        id: 1,
        color: COLOR_GREEN
    },
    2: {
        id: 2,
        color: COLOR_GREEN
    },
    3: {
        id: 3,
        color: COLOR_GREEN
    }
};

const greenPawns2 = [{
        id: 0,
        color: COLOR_GREEN
    },
    {
        id: 1,
        color: COLOR_GREEN
    },
    {
        id: 2,
        color: COLOR_GREEN
    },
    {
        id: 3,
        color: COLOR_GREEN
    }
];

export const onePlayers = {
    queue: [{
        id: 0,
        name: "Tom",
        pawns: redPawns2

    }, ],
    gameBoard: {},
    baseBlue: {},
    baseGreen: [],
    baseYellow: [],
    baseRed: [],
    homeYellow: [],
    homeRed: redPawns2,
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
    queue: [{
        id: 0,
        name: "Tom",
        pawns: redPawns2

    }, {
        id: 1,
        name: "Bob",
        pawns: bluePawns2

    }, {
        id: 2,
        name: "Jim",
        pawns: yellowPawns2

    }, {
        id: 3,
        name: "Tim",
        pawns: greenPawns2

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