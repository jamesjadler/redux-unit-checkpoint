import {GET_COMMENTS} from "../actions";


export default function comments(state = [], action) {
    switch (action.type) {
        case GET_COMMENTS:
            console.log("In Reducer GET_COMMENTS");
            console.log(action.comments);
            return action.comments;
        default:
            return state
    }

}