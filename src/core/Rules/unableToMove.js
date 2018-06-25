import {UNABLE_TO_MOVE} from "../../redux/actions/actionTypes";
export default function unableToMove(props) {
    const {
        pawn,
        pawnActions,
        reason
    } = props;
    const newPawn = {...pawn, reason};
    pawnActions.addAction({
        types: [{
            type: UNABLE_TO_MOVE
        }],
        pawn: newPawn
    });
}