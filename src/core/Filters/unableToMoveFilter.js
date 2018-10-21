import { UNABLE_TO_MOVE } from '../../redux/actions/actionTypes';
export default function unableToMoveFilter(pawn){
    if(!pawn.movement || !pawn.movement.length ){
        return true;
    }
   return pawn.movement && pawn.movement[0].type===UNABLE_TO_MOVE;
}