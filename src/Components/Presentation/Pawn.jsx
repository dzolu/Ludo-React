import React from "react";
import PropTypes from 'prop-types';
const Pawn= (props)=>{

    return(
        <div className={`pawn pawn--${props.color}`}></div>
    )
}

export default Pawn;
Pawn.propTypes={
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}