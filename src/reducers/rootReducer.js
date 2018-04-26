import {combineReducers} from 'redux'
import posts from './postsReducer'
import comments from './commentsReducer'
import postForm from './postFormReducer'

export default combineReducers({
    posts,
    comments,
    postForm
})