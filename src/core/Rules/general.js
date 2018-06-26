import unableToMove from "./unableToMove";
import { NO_PAWN_ON_BOARD } from '../../types/MessagesTypes';

export default function general(props) {
    const {
        pawn,
        result
    } = props;
  
    if ((result !== 1 || result !== 6) && true) {
        unableToMove({...props, pawn, reason: NO_PAWN_ON_BOARD});
    }
}