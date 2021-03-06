import * as Types from "./actionTypes";

export function dispatchAction(type, pawn) {
    return {type, pawn}
}

export function addAction(types) {
    return {type: Types.ADD_ACTION, ...types}
}

export function nextPlayer(queue) {
    return {type: Types.NEXT_PLAYER, queue}
}

export function clearAfterMove(pawn) {
    return {type: Types.CLEAN_AFTER_MOVE_FORWARD, pawn}
}

export function didMakeMove(flag) {
    return {type: Types.DID_MAKE_MOVE, flag}
}

export function hasSecondMove(flag) {
    return{type: Types.HAS_SECOND_MOVE, flag}

}