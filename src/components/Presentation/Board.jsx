import React from "react";
import Position from './../Presentation/Position'; 
import * as ColorTypes from "../../types/ColorTypes";
import * as PositionTypes from "../../types/PositionTypes";
import Placeholder from './Placeholder'; 
const Board =(props)=>{ 
    return (
<div className="board">
    <div className="row">
        <Position {...{id:0, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_BASE, posRef: props.baseBlue[0]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_BASE, posRef: props.baseBlue[1]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:38, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[38]}} />
        <Position {...{id:39, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[39]}} />
        <Position {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[0]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_BASE, posRef: props.baseRed[0]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_BASE, posRef: props.baseRed[1]}} />
    </div>
    {/*
    <!-- 2 -->*/}
    <div className="row">
        <Position {...{id:2, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_BASE, posRef: props.baseBlue[2]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_BASE, posRef: props.baseBlue[3]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:37, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[37]}} />
        <Position {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_HOME,  posRef: props.homeRed[0]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[1]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:2, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_BASE, posRef: props.baseRed[2]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_BASE, posRef: props.baseRed[3]}} />
    </div>
    {/*
    <!-- 3 -->*/}
    <div className="row">
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:36, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[36]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_HOME,  posRef: props.homeRed[1]}} />
        <Position {...{id:2, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[2]}} />
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
    </div>
    {/*
    <!-- 4 -->*/}
    <div className="row">
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:35, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[35]}} />
        <Position {...{id:2, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_HOME, posRef: props.homeRed[2]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[3]}} />
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
    </div>
    {/*
    <!-- 5 -->*/}
    <div className="row">
        <Position {...{id:30, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[30]}} />
        <Position {...{id:31, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[31]}} />
        <Position {...{id:32, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[32]}} />
        <Position {...{id:33, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[33]}} />
        <Position {...{id:34, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[34]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_HOME,  posRef: props.homeRed[3]}} />
        <Position {...{id:4, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[4]}} />
        <Position {...{id:5, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[5]}} />
        <Position {...{id:6, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[6]}} />
        <Position {...{id:7, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[7]}} />
        <Position {...{id:8, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[8]}} />
    </div>
    {/*
    <!-- 6 -->*/}
    <div className="row">
        <Position {...{id:29, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[29]}} />
        <Position {...{id:0, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_HOME ,  posRef: props.homeBlue[0]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_HOME,  posRef: props.homeBlue[1]}} />
        <Position {...{id:2, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_HOME,  posRef: props.homeBlue[2]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_HOME,  posRef: props.homeBlue[3]}} />
        <Placeholder/>
        <Position {...{id:3, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_HOME,  posRef: props.homeGreen[3]}} />
        <Position {...{id:2, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_HOME,  posRef: props.homeGreen[2]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_HOME,  posRef: props.homeGreen[1]}} />
        <Position {...{id:0, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_HOME,  posRef: props.homeGreen[0]}} />
        <Position {...{id:9, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[9]}} />
    </div>
    {/*
    <!-- 7 -->*/}
    <div className="row">
        <Position {...{id:28, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[28]}} />
        <Position {...{id:27, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[27]}} />
        <Position {...{id:26, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[26]}} />
        <Position {...{id:25, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[25]}} />
        <Position {...{id:24, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[24]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_HOME,  posRef: props.homeYellow[0]}} />
        <Position {...{id:14, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[14]}} />
        <Position {...{id:13, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[13]}} />
        <Position {...{id:12, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[12]}} />
        <Position {...{id:11, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[11]}} />
        <Position {...{id:10, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[10]}} />
    </div>
    {/*
    <!-- 8 -->*/}
    <div className="row">
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:23, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[23]}} />
        <Position {...{id:2, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_HOME,  posRef: props.homeYellow[2]}} />
        <Position {...{id:15, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[15]}} />
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
    </div>
    {/*
    <!-- 9 -->*/}
    <div className="row">
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:22, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[22]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_HOME,  posRef: props.homeYellow[1]}} />
        <Position {...{id:16, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[16]}} />
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
    </div>
    {/*
    <!-- 10 -->*/}
    <div className="row">
        <Position {...{id:0, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_BASE, posRef: props.baseYellow[0]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_BASE, posRef: props.baseYellow[1]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:21, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD,  posRef: props.gameBoard[21]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_HOME,  posRef: props.homeYellow[0]}} />
        <Position {...{id:17, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD,  posRef: props.gameBoard[17]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:0, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_BASE, posRef: props.baseGreen[0]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_BASE, posRef: props.baseGreen[1]}} />
    </div>
    {/*
    <!-- 11 -->*/}
    <div className="row">
        <Position {...{id:2, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_BASE, posRef: props.baseYellow[2]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_BASE, posRef: props.baseYellow[3]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:20, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[20]}} />
        <Position {...{id:19, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[19]}} />
        <Position {...{id:18, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: props.gameBoard[18]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:2, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_BASE, posRef: props.baseGreen[2] }} />
        <Position {...{id:3, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_BASE, posRef: props.baseGreen[3]}} />
    </div>
</div>
)
};

export default Board;