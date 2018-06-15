import * as Types from "../actions/actionTypes";
export default function actions(state, action) {
    switch (action.type) {
        case Types.ADD_ACTION:
            return action.types;
        case Types.NEXT_PLAYER:
            return [];      
        default:
            return state;
    }
}