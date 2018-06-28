import * as COLORS from "../../types/ColorTypes";

//general
export const BEAT_PAWN = "BEAT_PAWN";
export const UNABLE_TO_MOVE = "UNABLE_TO_MOVE";
export const ADD_ACTION = "ADD_ACTION";
export const MOVE_FORWARD = "MOVE_FORWARD";
export const THROW_DICE = "THROW_DICE";
export const LEAVE_BASE = "LEAVE_BASE";
export const BACK_TO_BASE = "BACK_TO_BASE";
export const MOVE_TO_HOME = "MOVE_TO_HOME";
export const NEXT_PLAYER="NEXT_PLAYER";
export const CLEAN_AFTER_MOVE_FORWARD ="CLEAN_AFTER_MOVE_FORWARD";
export const ADD_LEAVE_BASE_ACTION = "ADD_LEAVE_BASE_ACTION";
export const DID_MAKE_MOVE="DID_MAKE_MOVE";

//pawns 
export const YELLOW_BACK_TO_BASE = `${COLORS.COLOR_YELLOW.toUpperCase()}_${BACK_TO_BASE}`;
export const YELLOW_LEAVE_BASE = `${COLORS.COLOR_YELLOW.toUpperCase()}_${LEAVE_BASE}`; 
export const YELLOW_MOVE_TO_HOME = `${COLORS.COLOR_YELLOW.toUpperCase()}_${MOVE_TO_HOME}`; 

export const RED_LEAVE_BASE = `${COLORS.COLOR_RED.toUpperCase()}_${LEAVE_BASE}`; 
export const RED_MOVE_TO_HOME = `${COLORS.COLOR_RED.toUpperCase()}_${MOVE_TO_HOME}`; 
export const RED_BACK_TO_BASE = `${COLORS.COLOR_RED.toUpperCase()}_${BACK_TO_BASE}`;

export const GREEN_LEAVE_BASE = `${COLORS.COLOR_GREEN.toUpperCase()}_${LEAVE_BASE}`; 
export const GREEN_MOVE_TO_HOME = `${COLORS.COLOR_GREEN.toUpperCase()}_${MOVE_TO_HOME}`; 
export const GREEN_BACK_TO_BASE = `${COLORS.COLOR_GREEN.toUpperCase()}_${BACK_TO_BASE}`;

export const BLUE_LEAVE_BASE = `${COLORS.COLOR_BLUE.toUpperCase()}_${LEAVE_BASE}`; 
export const BLUE_MOVE_TO_HOME = `${COLORS.COLOR_BLUE.toUpperCase()}_${MOVE_TO_HOME}`; 
export const BLUE_BACK_TO_BASE = `${COLORS.COLOR_BLUE.toUpperCase()}_${BACK_TO_BASE}`;


