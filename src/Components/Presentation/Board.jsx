import React from "react";
import PositionContaner from './../Container/PositionContainer'; 
import * as ColorTypes from "./../../Types/ColorTypes";
import * as PositionTypes from "./../../Types/PositionTypes"; 
import Placeholder from './Placeholder'; 
const Board =(props)=>{ 
    return (
<div className="board">
    <div className="row">
        <PositionContaner {...{id:0, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BASE_TYPE, posRef: props.baseBlue[0]}} />
        <PositionContaner {...{id:1, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BASE_TYPE, posRef: props.baseBlue[1]}} />
        <Placeholder/>
        <Placeholder/>
        <PositionContaner {...{id:38, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[38]}} />
        <PositionContaner {...{id:39, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[39]}} />
        <PositionContaner {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[0]}} />
        <Placeholder/>
        <Placeholder/>
        <PositionContaner {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.BASE_TYPE, posRef: props.baseRed[0]}} />
        <PositionContaner {...{id:1, color: ColorTypes.COLOR_RED, type:PositionTypes.BASE_TYPE, posRef: props.baseRed[1]}} />
    </div>
    {/*
    <!-- 2 -->*/}
    <div className="row">
        <PositionContaner {...{id:2, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BASE_TYPE, posRef: props.baseBlue[2]}} />
        <PositionContaner {...{id:3, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BASE_TYPE, posRef: props.baseBlue[3]}} />
        <Placeholder/>
        <Placeholder/>
        <PositionContaner {...{id:37, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[37]}} />
        <PositionContaner {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.HOME_TYPE,  posRef: props.homeRed[0]}} />
        <PositionContaner {...{id:1, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[1]}} />
        <Placeholder/>
        <Placeholder/>
        <PositionContaner {...{id:2, color: ColorTypes.COLOR_RED, type:PositionTypes.BASE_TYPE, posRef: props.baseRed[2]}} />
        <PositionContaner {...{id:3, color: ColorTypes.COLOR_RED, type:PositionTypes.BASE_TYPE, posRef: props.baseRed[3]}} />
    </div>
    {/*
    <!-- 3 -->*/}
    <div className="row">
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <PositionContaner {...{id:36, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[36]}} />
        <PositionContaner {...{id:1, color: ColorTypes.COLOR_RED, type:PositionTypes.HOME_TYPE,  posRef: props.homeRed[1]}} />
        <PositionContaner {...{id:2, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[2]}} />
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
        <PositionContaner {...{id:35, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[35]}} />
        <PositionContaner {...{id:2, color: ColorTypes.COLOR_RED, type:PositionTypes.HOME_TYPE, posRef: props.homeRed[2]}} />
        <PositionContaner {...{id:3, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[3]}} />
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
    </div>
    {/*
    <!-- 5 -->*/}
    <div className="row">
        <PositionContaner {...{id:30, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[30]}} />
        <PositionContaner {...{id:31, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[31]}} />
        <PositionContaner {...{id:32, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[32]}} />
        <PositionContaner {...{id:33, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[33]}} />
        <PositionContaner {...{id:34, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[34]}} />
        <PositionContaner {...{id:3, color: ColorTypes.COLOR_RED, type:PositionTypes.HOME_TYPE,  posRef: props.homeRed[3]}} />
        <PositionContaner {...{id:4, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[4]}} />
        <PositionContaner {...{id:5, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[5]}} />
        <PositionContaner {...{id:6, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[6]}} />
        <PositionContaner {...{id:7, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[7]}} />
        <PositionContaner {...{id:8, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[8]}} />
    </div>
    {/*
    <!-- 6 -->*/}
    <div className="row">
        <PositionContaner {...{id:39, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[39]}} />
        <PositionContaner {...{id:0, color: ColorTypes.COLOR_BLUE, type:PositionTypes.HOME_TYPE ,  posRef: props.homeBlue[0]}} />
        <PositionContaner {...{id:1, color: ColorTypes.COLOR_BLUE, type:PositionTypes.HOME_TYPE,  posRef: props.homeBlue[1]}} />
        <PositionContaner {...{id:2, color: ColorTypes.COLOR_BLUE, type:PositionTypes.HOME_TYPE,  posRef: props.homeBlue[2]}} />
        <PositionContaner {...{id:3, color: ColorTypes.COLOR_BLUE, type:PositionTypes.HOME_TYPE,  posRef: props.homeBlue[3]}} />
        <Placeholder/>
        <PositionContaner {...{id:3, color: ColorTypes.COLOR_GREEN, type:PositionTypes.HOME_TYPE,  posRef: props.homeGreen[3]}} />
        <PositionContaner {...{id:2, color: ColorTypes.COLOR_GREEN, type:PositionTypes.HOME_TYPE,  posRef: props.homeGreen[2]}} />
        <PositionContaner {...{id:1, color: ColorTypes.COLOR_GREEN, type:PositionTypes.HOME_TYPE,  posRef: props.homeGreen[1]}} />
        <PositionContaner {...{id:0, color: ColorTypes.COLOR_GREEN, type:PositionTypes.HOME_TYPE,  posRef: props.homeGreen[0]}} />
        <PositionContaner {...{id:9, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[9]}} />
    </div>
    {/*
    <!-- 7 -->*/}
    <div className="row">
        <PositionContaner {...{id:28, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[25]}} />
        <PositionContaner {...{id:27, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[27]}} />
        <PositionContaner {...{id:26, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[26]}} />
        <PositionContaner {...{id:25, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[25]}} />
        <PositionContaner {...{id:24, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[24]}} />
        <PositionContaner {...{id:3, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.HOME_TYPE,  posRef: props.homeYellow[0]}} />
        <PositionContaner {...{id:14, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[14]}} />
        <PositionContaner {...{id:13, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[13]}} />
        <PositionContaner {...{id:12, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[12]}} />
        <PositionContaner {...{id:11, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[11]}} />
        <PositionContaner {...{id:10, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[10]}} />
    </div>
    {/*
    <!-- 8 -->*/}
    <div className="row">
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <PositionContaner {...{id:23, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[23]}} />
        <PositionContaner {...{id:2, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.HOME_TYPE,  posRef: props.homeYellow[2]}} />
        <PositionContaner {...{id:15, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[15]}} />
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
        <PositionContaner {...{id:22, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[22]}} />
        <PositionContaner {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.HOME_TYPE,  posRef: props.homeYellow[1]}} />
        <PositionContaner {...{id:16, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[16]}} />
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
    </div>
    {/*
    <!-- 10 -->*/}
    <div className="row">
        <PositionContaner {...{id:0, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BASE_TYPE, posRef: props.baseYellow[0]}} />
        <PositionContaner {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BASE_TYPE, posRef: props.baseYellow[1]}} />
        <Placeholder/>
        <Placeholder/>
        <PositionContaner {...{id:21, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE,  posRef: props.gameBoard[21]}} />
        <PositionContaner {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.HOME_TYPE,  posRef: props.homeYellow[0]}} />
        <PositionContaner {...{id:17, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE,  posRef: props.gameBoard[17]}} />
        <Placeholder/>
        <Placeholder/>
        <PositionContaner {...{id:0, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BASE_TYPE, posRef: props.baseGreen[0]}} />
        <PositionContaner {...{id:1, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BASE_TYPE, posRef: props.baseGreen[1]}} />
    </div>
    {/*
    <!-- 11 -->*/}
    <div className="row">
        <PositionContaner {...{id:2, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BASE_TYPE, posRef: props.baseYellow[2]}} />
        <PositionContaner {...{id:3, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BASE_TYPE, posRef: props.baseYellow[3]}} />
        <Placeholder/>
        <Placeholder/>
        <PositionContaner {...{id:20, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[20]}} />
        <PositionContaner {...{id:19, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[19]}} />
        <PositionContaner {...{id:18, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE, posRef: props.gameBoard[18]}} />
        <Placeholder/>
        <Placeholder/>
        <PositionContaner {...{id:2, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BASE_TYPE, posRef: props.baseGreen[2] }} />
        <PositionContaner {...{id:3, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BASE_TYPE, posRef: props.baseGreen[3]}} />
    </div>
</div>
)
}   

export default Board;