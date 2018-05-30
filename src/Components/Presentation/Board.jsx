import React, { Component } from "react";
import Position from './Position'; 
import * as ColorTypes from "./../../Types/ColorTypes";
import * as PositionTypes from "./../../Types/PositionTypes"; 
import Placeholder from './Placeholder'; 
class Board extends Component{ 
    render(){ return (
<div className="board">
    <div className="row">
        <Position {...{id:0, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BASE_TYPE}} />
        <Position {...{id:1, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BASE_TYPE}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:38, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:39, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.BOARD_TYPE}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.BASE_TYPE}} />
        <Position {...{id:1, color: ColorTypes.COLOR_RED, type:PositionTypes.BASE_TYPE}} />
    </div>
    {/*
    <!-- 2 -->*/}
    <div className="row">
        <Position {...{id:2, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BASE_TYPE}} />
        <Position {...{id:3, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BASE_TYPE}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:37, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:1, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:3, color: ColorTypes.COLOR_RED, type:PositionTypes.BASE_TYPE}} />
        <Position {...{id:4, color: ColorTypes.COLOR_RED, type:PositionTypes.BASE_TYPE}} />
    </div>
    {/*
    <!-- 3 -->*/}
    <div className="row">
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:36, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:1, color: ColorTypes.COLOR_RED, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:2, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
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
        <Position {...{id:35, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:2, color: ColorTypes.COLOR_RED, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:3, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
    </div>
    {/*
    <!-- 5 -->*/}
    <div className="row">
        <Position {...{id:30, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:31, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:32, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:33, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:34, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:3, color: ColorTypes.COLOR_RED, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:4, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:5, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:6, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:7, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:8, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
    </div>
    {/*
    <!-- 6 -->*/}
    <div className="row">
        <Position {...{id:39, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:0, color: ColorTypes.COLOR_BLUE, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:1, color: ColorTypes.COLOR_BLUE, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:2, color: ColorTypes.COLOR_BLUE, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:3, color: ColorTypes.COLOR_BLUE, type:PositionTypes.HOME_TYPE}} />
        <Placeholder/>
        <Position {...{id:3, color: ColorTypes.COLOR_GREEN, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:2, color: ColorTypes.COLOR_GREEN, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:1, color: ColorTypes.COLOR_GREEN, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:0, color: ColorTypes.COLOR_GREEN, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:9, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
    </div>
    {/*
    <!-- 7 -->*/}
    <div className="row">
        <Position {...{id:28, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:27, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:26, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:25, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:24, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:3, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:14, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:13, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:12, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:11, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:10, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BOARD_TYPE}} />
    </div>
    {/*
    <!-- 8 -->*/}
    <div className="row">
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:23, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:2, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:15, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
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
        <Position {...{id:22, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:16, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
        <Placeholder/>
    </div>
    {/*
    <!-- 10 -->*/}
    <div className="row">
        <Position {...{id:0, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BASE_TYPE}} />
        <Position {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BASE_TYPE}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:21, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.HOME_TYPE}} />
        <Position {...{id:17, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:0, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BASE_TYPE}} />
        <Position {...{id:1, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BASE_TYPE}} />
    </div>
    {/*
    <!-- 11 -->*/}
    <div className="row">
        <Position {...{id:2, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BASE_TYPE}} />
        <Position {...{id:3, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BASE_TYPE}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:20, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:19, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Position {...{id:18, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}} />
        <Placeholder/>
        <Placeholder/>
        <Position {...{id:2, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BASE_TYPE}} />
        <Position {...{id:3, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BASE_TYPE}} />
    </div>
</div>
) } } export default Board;