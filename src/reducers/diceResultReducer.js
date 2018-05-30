import * as Types from './../actions/actionTypes';
export default function diceResult(state=6, action) {
    switch (action.type) {
        case Types.THROW_DICE:
            return action.diceResult;
        default:
            return state;
    }
}