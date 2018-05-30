import React from "react";
import PropTypes from 'prop-types';
import Pawn from './Pawn';

const Position=(props)=>{
    const hasPawn=()=>{
        return props.posRef && <Pawn {...props.posRef}/>  
    }   
    return  (
            <div className="placeOnBoard">
                <div className={`placeOnBoard__position placeOnBoard__position--${props.color}`}>
                            {hasPawn()}
                </div>
             </div>
             )
}

Position.propTypes={
    pawn: PropTypes.object,
    color:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    id:  PropTypes.number.isRequired
}
export default Position;