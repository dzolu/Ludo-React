import * as Types from "./playerTypes"

export function playerAction(arg) {
    return {type: Types.CHANGE_PLAYER, arg}
}

export function leaveBase(arg) {
    return {type: Types.LEAVE_BASE, arg}
}

export function addLeaveBaseAction(arg) {
    return {type: Types.ADD_LEAVE_BASE_ACTION, arg}
}