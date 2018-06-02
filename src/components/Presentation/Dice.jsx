import React from "react";
const Dice=(props)=>{
    const adapter={
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six"
    };

    return(
        <div className={`dice dice--${adapter[props.result]}`} onClick={props.throwDice}>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
        </div>

    )
};
export default Dice;