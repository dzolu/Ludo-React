import { UNABLE_TO_MOVE } from '../../redux/actions/actionTypes';
export default function unableToMoveFilter(pawn){
    if(!pawn.actions || !pawn.actions.length ){
        return true;
    }
   return pawn.actions && pawn.actions[0].type!==UNABLE_TO_MOVE;
}