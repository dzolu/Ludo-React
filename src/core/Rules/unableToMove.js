import * as Types from "../../redux/actions/actionTypes";
export default function unableToMove(props) {
    const {
        pawn,
        actions,
        reason
    } = props;
    const newPawn = Object.assign({}, ...pawn, reason)
    actions.addAction({
        types: [{
            type: Types.UNABLE_TO_MOVE
        }],
        pawn: newPawn
    });
}