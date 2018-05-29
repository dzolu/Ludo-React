import React from "react";
import PropTypes from 'prop-types';

const Position=(props)=>{

    return  (<div className="placeOnBoard">
                <div className={`placeOnBoard__position placeOnBoard__position--${props.color}`}></div>
             </div>)
}

Position.propTypes={
    pawn: PropTypes.object,
    color:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    positionref:  PropTypes.object.isRequired,
    id:  PropTypes.number.isRequired
}
export default Position;