import * as Types from "./actionTypes";

export function dispatchAction(type, pawn) {
    return {type: type, pawn}
}
export function addAction(arg) {
    return {type: Types.ADD_ACTION, arg}
}