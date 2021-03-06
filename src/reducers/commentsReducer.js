import {GET_COMMENTS, SAVE_COMMENT} from "../actions";


export default function comments(state = [], action) {
    switch (action.type) {
        case GET_COMMENTS:
            console.log("In Reducer GET_COMMENTS");
            console.log(action.comments);
            return action.comments;
        case SAVE_COMMENT:
            return [...state, action.comment]
        default:
            return state
    }

}