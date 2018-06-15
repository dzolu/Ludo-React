import * as Types from "./actionTypes";

export function dispatchAction(type, pawn) {
    return {type, pawn}
}
export function addAction(types) {
    return {type: Types.ADD_ACTION, ...types}
}

export function nextPlayer(pawn) {
    return {type: Types.NEXT_PLAYER, pawn}
}

export function clearAfterMove(pawn) {
    return {type: Types.CLEAN_AFTER_MOVE_FORWARD, pawn}
}
