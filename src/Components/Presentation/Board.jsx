import React, { Component } from "react"; 
import Position from './Position'
import * as ColorTypes from "./../../Types/ColorTypes"
import * as PositionTypes from "./../../Types/PositionTypes"
class Board extends Component{ 
    render(){ 
        const board=[56]; 
        const baseYellow= [4];
        const homeYellow=  [];
        const baseRed=  [];
        const homeRed=  [];
        const baseBlue= [];
        const homeBlue= [];
        const baseGreen= [];
        const homeGreen= [];
        return (
<div className="board">

    <div className="row">
        <div className="placeOnBoard">
                <Position {...{id:0, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BASE_TYPE}}   />
        </div>
        <div className="placeOnBoard">
            <Position {...{id:1, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BASE_TYPE}}   />
        </div>
        <div className="placeOnBoard">
                <div className="circle circle--placeholder"></div>
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
        <Position {...{id:38, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
          
        </div>
        <div className="placeOnBoard">
        <Position {...{id:39, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
            
        </div>
        <div className="placeOnBoard">
        <Position {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.BOARD_TYPE}}   />
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
            <Position {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.BASE_TYPE}}   />    
        </div>
        <div className="placeOnBoard">
        <Position {...{id:1, color: ColorTypes.COLOR_RED, type:PositionTypes.BASE_TYPE}}   />
        </div>
    </div>
    {/*
    <!-- 2 -->*/}
    <div className="row">
        <div className="placeOnBoard">
        <Position {...{id:2, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BASE_TYPE}}   />
         
        </div>
        <div className="placeOnBoard">
        <Position {...{id:3, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BASE_TYPE}}   />
        
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
            <Position {...{id:37, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
        </div>
        <div className="placeOnBoard">
            <Position {...{id:0, color: ColorTypes.COLOR_RED, type:PositionTypes.BOARD_TYPE}}   />   
        </div>
        <div className="placeOnBoard">
        <Position {...{id:1, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
        
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
                 <Position {...{id:3, color: ColorTypes.COLOR_RED, type:PositionTypes.BASE_TYPE}}   />

        </div>
        <div className="placeOnBoard">
                    <Position {...{id:4, color: ColorTypes.COLOR_RED, type:PositionTypes.BASE_TYPE}}   />
        </div>
    </div>
    {/*
    <!-- 3 -->*/}
    <div className="row">
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
        <Position {...{id:36, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
            
        </div>
        <div className="placeOnBoard">
        <Position {...{id:1, color: ColorTypes.COLOR_RED, type:PositionTypes.HOME_TYPE}}   />
        </div>
        <div className="placeOnBoard">
        <Position {...{id:2, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
         
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
    </div>
    {/*
    <!-- 4 -->*/}
    <div className="row">
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
        <Position {...{id:35, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
          
        </div>
        <div className="placeOnBoard">
        <Position {...{id:2, color: ColorTypes.COLOR_RED, type:PositionTypes.HOME_TYPE}}   />
        </div>
        <div className="placeOnBoard">
        <Position {...{id:3, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
        
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
    </div>
    {/*
    <!-- 5 -->*/}
    <div className="row">
        <div className="placeOnBoard">
        <Position {...{id:30, color: ColorTypes.COLOR_BLUE, type:PositionTypes.BOARD_TYPE}}   />
        
        </div>
        <div className="placeOnBoard">
        <Position {...{id:31, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
        
        </div>
        <div className="placeOnBoard">
        <Position {...{id:32, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
            
        </div>
        <div className="placeOnBoard">
        <Position {...{id:33, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
           
        </div>
        <div className="placeOnBoard">
        <Position {...{id:34, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
           
        </div>
        <div className="placeOnBoard">
        <Position {...{id:3, color: ColorTypes.COLOR_RED, type:PositionTypes.HOME_TYPE}}   />
          
        </div>
        <div className="placeOnBoard">
        <Position {...{id:4, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
            
        </div>
        <div className="placeOnBoard">
        <Position {...{id:5, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
         
        </div>
        <div className="placeOnBoard">
        <Position {...{id:6, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
         
        </div>
        <div className="placeOnBoard">
        <Position {...{id:7, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
           
        </div>
        <div className="placeOnBoard">
        <Position {...{id:8, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
           
        </div>
    </div>
    {/*
    <!-- 6 -->*/}
    <div className="row">
        <div className="placeOnBoard">
        <Position {...{id:39, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
            
        </div>
        <div className="placeOnBoard">
        <Position {...{id:0, color: ColorTypes.COLOR_BLUE, type:PositionTypes.HOME_TYPE}}   />
        </div>
        <div className="placeOnBoard">
        <Position {...{id:1, color: ColorTypes.COLOR_BLUE, type:PositionTypes.HOME_TYPE}}   />
        </div>
        <div className="placeOnBoard">
        <Position {...{id:2, color: ColorTypes.COLOR_BLUE, type:PositionTypes.HOME_TYPE}}   />
        </div>
        <div className="placeOnBoard">
        <Position {...{id:3, color: ColorTypes.COLOR_BLUE, type:PositionTypes.HOME_TYPE}}   />
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
        <Position {...{id:3, color: ColorTypes.COLOR_GREEN, type:PositionTypes.HOME_TYPE}}   />
        
        </div>
        <div className="placeOnBoard">
        <Position {...{id:2, color: ColorTypes.COLOR_GREEN, type:PositionTypes.HOME_TYPE}}   />
        </div>
        <div className="placeOnBoard">
        <Position {...{id:1, color: ColorTypes.COLOR_GREEN, type:PositionTypes.HOME_TYPE}}   />
        </div>
        <div className="placeOnBoard">
        <Position {...{id:0, color: ColorTypes.COLOR_GREEN, type:PositionTypes.HOME_TYPE}}   />
        </div>
        <div className="placeOnBoard">
        <Position {...{id:9, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
          
        </div>
    </div>
    {/*
    <!-- 7 -->*/}
    <div className="row">
        <div className="placeOnBoard">
        <Position {...{id:28, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
        
        </div>
        <div className="placeOnBoard">
        <Position {...{id:27, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
        
        </div>
        <div className="placeOnBoard">
        <Position {...{id:26, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
  
        </div>
        <div className="placeOnBoard">
        <Position {...{id:25, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
           
        </div>
        <div className="placeOnBoard">
        <Position {...{id:24, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
          
        </div>
        <div className="placeOnBoard">
        <Position {...{id:3, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.HOME_TYPE}}   />
           
        </div>
        <div className="placeOnBoard">
        <Position {...{id:14, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
         
        </div>
        <div className="placeOnBoard">
        <Position {...{id:13, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
           
        </div>
        <div className="placeOnBoard">
        <Position {...{id:12, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
         
        </div>
        <div className="placeOnBoard">
        <Position {...{id:11, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
            
        </div>
        <div className="placeOnBoard">
                <Position {...{id:10, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BOARD_TYPE}}   />
        </div>
    </div>
    {/*
    <!-- 8 -->*/}
    <div className="row">
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
        <Position {...{id:23, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
           
        </div>
        <div className="placeOnBoard">
        <Position {...{id:2, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.HOME_TYPE}}   />
         
        </div>
        <div className="placeOnBoard">
        <Position {...{id:15, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
         
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
    </div>
    {/*
    <!-- 9 -->*/}
    <div className="row">
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
        <Position {...{id:22, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
         
        </div>
        <div className="placeOnBoard">
        <Position {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.HOME_TYPE}}   />
           
        </div>
        <div className="placeOnBoard">
        <Position {...{id:16, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
           
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
    </div>
    {/*
    <!-- 10 -->*/}
    <div className="row">
        <div className="placeOnBoard">
        <Position {...{id:0, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BASE_TYPE}}   />
        </div>
        <div className="placeOnBoard">
        <Position {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BASE_TYPE}}   />
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
        <Position {...{id:21, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
         
        </div>
        <div className="placeOnBoard">
        <Position {...{id:1, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.HOME_TYPE}}   />
         
        </div>
        <div className="placeOnBoard">
        <Position {...{id:17, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
           
        </div>
        <div className="placeOnBoard">
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
        <Position {...{id:0, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BASE_TYPE}}   />
        </div>
        <div className="placeOnBoard">
        <Position {...{id:1, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BASE_TYPE}}   />
        </div>
    </div>
    {/*
    <!-- 11 -->*/}
    <div className="row">
        <div className="placeOnBoard">
        <Position {...{id:2, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BASE_TYPE}}   />
        </div>
        <div className="placeOnBoard">
        <Position {...{id:3, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BASE_TYPE}}   />
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
            <Position {...{id:20, color: ColorTypes.COLOR_YELLOW, type:PositionTypes.BOARD_TYPE}}   />
        </div>
        <div className="placeOnBoard">
        <Position {...{id:19, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
            
        </div>
        <div className="placeOnBoard">
        <Position {...{id:18, color: ColorTypes.COLOR_WHITE, type:PositionTypes.BOARD_TYPE}}   />
          
        </div>
        <div className="placeOnBoard">
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
        <Position {...{id:2, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BASE_TYPE}}   />
         
        </div>
        <div className="placeOnBoard">
        <Position {...{id:3, color: ColorTypes.COLOR_GREEN, type:PositionTypes.BASE_TYPE}}   />
        
        </div>
    </div>
</div>
)
 } 
} 
export default Board;