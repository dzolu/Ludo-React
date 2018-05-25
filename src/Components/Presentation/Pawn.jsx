import React from "react";
import PropTypes from 'prop-types';
const Pawn= (props)=>{

    return(
        <div className={`pawn pawn--${props.color}`}></div>
    )
}


Pawn.propTypes={
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Pawn;