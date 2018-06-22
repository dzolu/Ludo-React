import Rules from './Rules';
import * as Types from "../../redux/actions/actionTypes";


export default function moveToHome(props) {
    const {
        pawn
    } = props;
    if (!Rules.ableToMoveHome(pawn, props["homeRed"])) {
        return;
    }
    const type = Rules.createActionType(pawn.color, Types.MOVE_TO_HOME);
    props.pawnActions.addAction({
        pawn,
        types: [{
                type,
                pawn
            },
            {
                type: Types.CLEAN_AFTER_MOVE_FORWARD,
                pawn
            }
        ]
    });
}