import * as Types from "../actions/actionTypes";
export default function counterReducer(state, action) {
    switch (action.type) {
        case Types.YELLOW_BACK_TO_BASE:
        case Types.RED_LEAVE_BASE:
            return 0;
        
        default:
            return state;
    }
}