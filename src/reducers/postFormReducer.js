import {TOGGLE_POSTFORM} from "../actions";

export default function postForm(state = false, action) {
    switch (action.type) {

        case TOGGLE_POSTFORM:
            console.log("TOGGLE_POSTFORM");
            return !state;


        default:
            return state
    }

}