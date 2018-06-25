import React from "react";
import Position from './../Presentation/Position'; 
import * as ColorTypes from "../../types/ColorTypes";
import * as PositionTypes from "../../types/PositionTypes";
import Placeholder from './Placeholder'; 
const Board =(props)=>{ 
    const {blueBase, blueHome, redHome, redBase, yellowHome, yellowBase, greenHome, greenBase, gameBoard}=props;
    return (
<div className="board">
    <div className="row">
        <Position {...{id:0, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_BASE, posRef: blueBase[0]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_BASE, posRef: blueBase[1]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:38, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[38]}} />
        <Position {...{id:39, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[39]}} />
        <Position {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[0]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_BASE, posRef: redBase[0]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_BASE, posRef: redBase[1]}} />
    </div>
    {/*
    <!-- 2 -->*/}
    <div className="row">
        <Position {...{id:2, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_BASE, posRef: blueBase[2]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_BASE, posRef: blueBase[3]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:37, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[37]}} />
        <Position {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_HOME,  posRef: redHome[0]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[1]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:2, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_BASE, posRef: redBase[2]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_BASE, posRef: redBase[3]}} />
    </div>
    {/*
    <!-- 3 -->*/}
    <div className="row">
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:36, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[36]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_HOME,  posRef: redHome[1]}} />
        <Position {...{id:2, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[2]}} />
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
        <Position {...{id:35, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[35]}} />
        <Position {...{id:2, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_HOME, posRef: redHome[2]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[3]}} />
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
    </div>
    {/*
    <!-- 5 -->*/}
    <div className="row">
        <Position {...{id:30, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[30]}} />
        <Position {...{id:31, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[31]}} />
        <Position {...{id:32, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[32]}} />
        <Position {...{id:33, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[33]}} />
        <Position {...{id:34, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[34]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_RED, type:PositionTypes.TYPE_HOME,  posRef: redHome[3]}} />
        <Position {...{id:4, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[4]}} />
        <Position {...{id:5, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[5]}} />
        <Position {...{id:6, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[6]}} />
        <Position {...{id:7, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[7]}} />
        <Position {...{id:8, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[8]}} />
    </div>
    {/*
    <!-- 6 -->*/}
    <div className="row">
        <Position {...{id:29, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[29]}} />
        <Position {...{id:0, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_HOME ,  posRef: blueHome[0]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_HOME,  posRef: blueHome[1]}} />
        <Position {...{id:2, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_HOME,  posRef: blueHome[2]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_BLUE, type:PositionTypes.TYPE_HOME,  posRef: blueHome[3]}} />
        <Placeholder/>
        <Position {...{id:3, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_HOME,  posRef: greenHome[3]}} />
        <Position {...{id:2, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_HOME,  posRef: greenHome[2]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_HOME,  posRef: greenHome[1]}} />
        <Position {...{id:0, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_HOME,  posRef: greenHome[0]}} />
        <Position {...{id:9, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[9]}} />
    </div>
    {/*
    <!-- 7 -->*/}
    <div className="row">
        <Position {...{id:28, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[28]}} />
        <Position {...{id:27, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[27]}} />
        <Position {...{id:26, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[26]}} />
        <Position {...{id:25, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[25]}} />
        <Position {...{id:24, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[24]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_HOME,  posRef: yellowHome[0]}} />
        <Position {...{id:14, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[14]}} />
        <Position {...{id:13, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[13]}} />
        <Position {...{id:12, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[12]}} />
        <Position {...{id:11, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[11]}} />
        <Position {...{id:10, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[10]}} />
    </div>
    {/*
    <!-- 8 -->*/}
    <div className="row">
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:23, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[23]}} />
        <Position {...{id:2, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_HOME,  posRef: yellowHome[2]}} />
        <Position {...{id:15, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[15]}} />
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
        <Position {...{id:22, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[22]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_HOME,  posRef: yellowHome[1]}} />
        <Position {...{id:16, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[16]}} />
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
    </div>
    {/*
    <!-- 10 -->*/}
    <div className="row">
        <Position {...{id:0, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_BASE, posRef: yellowBase[0]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_BASE, posRef: yellowBase[1]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:21, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD,  posRef: gameBoard[21]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_HOME,  posRef: yellowHome[0]}} />
        <Position {...{id:17, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD,  posRef: gameBoard[17]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:0, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_BASE, posRef: greenBase[0]}} />
        <Position {...{id:1, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_BASE, posRef: greenBase[1]}} />
    </div>
    {/*
    <!-- 11 -->*/}
    <div className="row">
        <Position {...{id:2, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_BASE, posRef: yellowBase[2]}} />
        <Position {...{id:3, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_BASE, posRef: yellowBase[3]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:20, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[20]}} />
        <Position {...{id:19, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[19]}} />
        <Position {...{id:18, color: ColorTypes.COLOR_WHITE, type:PositionTypes.TYPE_BOARD, posRef: gameBoard[18]}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:2, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_BASE, posRef: greenBase[2] }} />
        <Position {...{id:3, color: ColorTypes.COLOR_GREEN, type:PositionTypes.TYPE_BASE, posRef: greenBase[3]}} />
    </div>
</div>
)
};

export default Board;