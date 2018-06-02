import * as Types from "../actions/actionTypes";

export default function pawnReducer(state, action) {
    switch (action.type) {
        case Types.ADD_LEAVE_BASE_ACTION:
            return {...state, actionName: action.arg.actionName};
        default:
            return state;
    }
}