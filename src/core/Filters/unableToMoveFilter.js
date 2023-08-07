import { UNABLE_TO_MOVE } from '../../redux/actions/actionTypes';
export default function unableToMoveFilter(pawn){
    if(!pawn.movement ){
        return true;
    }
   return pawn.movement &&  pawn.movement.type===UNABLE_TO_MOVE;
}