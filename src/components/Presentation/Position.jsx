import React from "react";
import PropTypes from 'prop-types';
import PawnContainer from "../Container/PawnContainer";

const Position=(props)=>{
    return  (
            <div className="placeOnBoard">
                <div className={`placeOnBoard__position placeOnBoard__position--${props.color}`}>
                            {!!props.posRef  && <PawnContainer {...props}/>}
                </div>
             </div>
             )
};

Position.propTypes={
    pawn: PropTypes.object,
    color:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    id:  PropTypes.number.isRequired
};
export default Position;