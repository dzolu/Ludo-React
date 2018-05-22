import React, { Component } from "react"; 
import Position from './Position'
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
<div className="container">

    <div className="row">
        <div className="placeOnBoard">
            <div className="circle blue home">   
                <Position positionref={baseBlue[0]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle blue home">
                <Position positionref={baseBlue[1]}/>
            </div>
        </div>
        <div className="placeOnBoard">
                <div className="circle circle--placeholder"></div>
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[38]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[39]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle red">
                <Position positionref={board[0]}/>
            </div>
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
            <div className="circle red home">
                <Position positionref={baseRed[0]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle red home">
                <Position positionref={baseRed[1]}/>
            </div>
        </div>
    </div>
    {/*
    <!-- 2 -->*/}
    <div className="row">
        <div className="placeOnBoard">
            <div className="circle blue home">
                <Position positionref={baseBlue[2]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle blue home">
                <Position positionref={baseBlue[3]}/>
            </div>
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[37]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle red">
                <Position positionref={homeRed[0]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[1]}/>
            </div>
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
            <div className="circle red">
                <Position positionref={baseRed[2]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle red">
                <Position positionref={baseRed[3]}/>
            </div>
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
            <div className="circle white">
                <Position positionref={board[36]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle red">
                <Position positionref={homeRed[1]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[2]}/>
            </div>
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
            <div className="circle white">
                <Position positionref={board[35]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle red">
                <Position positionref={homeRed[2]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[3]}/>
            </div>
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
            <div className="circle blue">
                <Position positionref={board[30]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[31]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[32]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[33]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[34]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle red">
                <Position positionref={homeRed[3]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[4]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[5]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[6]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[7]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[8]}/>
            </div>
        </div>
    </div>
    {/*
    <!-- 6 -->*/}
    <div className="row">
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[29]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle blue">
                <Position positionref={homeBlue[0]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle blue">
                <Position positionref={homeBlue[1]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle blue">
                <Position positionref={homeBlue[2]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle blue">
                <Position positionref={homeBlue[3]}/>
            </div>
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
            <div className="circle green">
                <Position positionref={homeGreen[3]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle green">
                <Position positionref={homeGreen[2]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle green">
                <Position positionref={homeGreen[1]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle green">
                <Position positionref={homeGreen[0]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[9]}/>
            </div>
        </div>
    </div>
    {/*
    <!-- 7 -->*/}
    <div className="row">
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[28]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[27]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[26]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[25]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[24]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle yellow">
                <Position positionref={homeYellow[3]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[14]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[13]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[12]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[11]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle green">
                <Position positionref={board[10]}/>
            </div>
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
            <div className="circle white">
                <Position positionref={board[23]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle yellow">
                <Position positionref={homeYellow[2]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[15]}/>
            </div>
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
            <div className="circle white">
                <Position positionref={board[22]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle yellow">
                <Position positionref={homeYellow[1]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[16]}/>
            </div>
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
            <div className="circle yellow">
                <Position positionref={baseYellow[0]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle yellow">
                <Position positionref={baseYellow[1]}/>

            </div>
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[21]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle yellow">
                <Position positionref={homeYellow[3]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[17]}/>
            </div>
        </div>
        <div className="placeOnBoard">
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
            <div className="circle green home">
                <Position positionref={baseGreen[0]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle green home">
                <Position positionref={baseGreen[1]}/>
            </div>
        </div>
    </div>
    {/*
    <!-- 11 -->*/}
    <div className="row">
        <div className="placeOnBoard">
            <div className="circle yellow home">
                <Position positionref={baseYellow[2]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle yellow home">
                <Position positionref={baseYellow[3]}/>
            </div>
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
            <div className="circle yellow" id="yellow">
                <Position positionref={board[20]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[19]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle white">
                <Position positionref={board[18]}/>
            </div>
        </div>
        <div className="placeOnBoard">
        </div>
          <div className="placeOnBoard">                 <div className="circle circle--placeholder"></div>         </div>
        <div className="placeOnBoard">
            <div className="circle green home">
                <Position positionref={baseGreen[2]}/>
            </div>
        </div>
        <div className="placeOnBoard">
            <div className="circle green home">
                <Position positionref={baseGreen[3]}/>
            </div>
        </div>
    </div>
</div>
)
 } 
} 
export default Board;