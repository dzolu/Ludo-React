import * as Types from "./moveTypes"


export function redAddLeaveBaseAction(action) {
    return {type: Types.ADD_ACTION, action}
}

export function redLeaveBase(pawn) {
    return {type: Types.RED_LEAVE_BASE, pawn}
}

export function redAddToBoardFromBase(pawn) {
    return {type: Types.RED_ADD_TO_BOARD_FROM_BASE, pawn}
}

export function dispatchAction(type, pawn) {
    return {type: type, pawn}
}