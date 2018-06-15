import * as COLORS from "../../types/ColorTypes";

//general
export var BEAT_PAWN = "BEAT_PAWN";
export var UNABLE_TO_MOVE = "UNABLE_TO_MOVE";
export var ADD_ACTION = "ADD_ACTION";
export var MOVE_FORWARD = "MOVE_FORWARD";
export const THROW_DICE = "THROW_DICE";
export const LEAVE_BASE = "LEAVE_BASE";
export const BACK_TO_BASE = "BACK_TO_BASE";
export const BLUE_LEAVE_BASE = "BLUE_LEAVE_BASE";
export const YELLOW_LEAVE_BASE = "YELLOW_LEAVE_BASE";
export const GREEN_LEAVE_BASE = "GREEN_LEAVE_BASE";

export const NEXT_PLAYER="NEXT_PLAYER";
export const CLEAN_AFTER_MOVE_FORWARD ="CLEAN_AFTER_MOVE_FORWARD";

//pawns 
export const YELLOW_BACK_TO_BASE = `${COLORS.COLOR_YELLOW.toUpperCase()}_${BACK_TO_BASE}`;
export const RED_LEAVE_BASE = `${COLORS.COLOR_RED.toUpperCase()}_${LEAVE_BASE}`; 
//player
export const ADD_LEAVE_BASE_ACTION = "ADD_LEAVE_BASE_ACTION";