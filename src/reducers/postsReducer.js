import {GET_POSTS, SAVE_POST} from "../actions";

export default function posts(state = [], action) {
    switch (action.type) {
        case GET_POSTS:
            console.log("In Reducer GET_POSTS");
            console.log(action.posts);
            return action.posts;
        case SAVE_POST:
            console.log("In Reducer SAVE_POST");
            console.log("Reducer Received:",action.post);
            return [action.post,...state];
        default:
            return state
    }
}


