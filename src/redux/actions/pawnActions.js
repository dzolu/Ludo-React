import * as Types from "./actionTypes";

export function dispatchAction(type, pawn) {
    return {type, pawn}
}
export function addAction(arg) {
    return {type: Types.ADD_ACTION, arg}
}

export function nextPlayer(pawns) {
    return {type: Types.NEXT_PLAYER, pawns: {...pawns}}
}

export function clearAfterMove(pawn) {
    return {type: Types.CLEAN_AFTER_MOVE_FORWARD, pawn}
}
