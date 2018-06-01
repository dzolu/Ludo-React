import * as Types from "./moveTypes"

export function redLeaveBase(pawn){
    return {type:Types.RED_LEAVE_BASE, pawn}
}

export function addRedToBoardFromBase(pawn){
    return {type:Types.RED_ADD_TO_BOARD_FROM_BASE, pawn}
}
