import React from "react";
import PropTypes from 'prop-types';
import { AppSettings } from '../../AppSettings';

const Pawn= (props)=>{
    const leaveBase=()=>{
        if(!!props.gameBoard[AppSettings.redHomeIndex]) return console.log("jest juz pionek");
            props.actions.redLeaveBase({[props.positionIndex] : null }); 
            props.actions.addRedToBoardFromBase({[AppSettings.redHomeIndex]:{color:props.color, id: props.id, positionIndex : AppSettings.redHomeIndex}});
        
       
    }
    return(
        <div className={`pawn pawn--${props.color}`} onClick={leaveBase}></div>
    )
}


Pawn.propTypes={
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    positionIndex: PropTypes.number.isRequired
}

export default Pawn;