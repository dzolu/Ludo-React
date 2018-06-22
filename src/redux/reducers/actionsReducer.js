import * as Types from "../actions/actionTypes";
export default function actions(state, action) {
    switch (action.type) {
        case Types.ADD_ACTION:
            return action.types;   
        default:
            return state;
    }
}