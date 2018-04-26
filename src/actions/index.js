//Post Form Actions

export const TOGGLE_POSTFORM = 'TOGGLE_POSTFORM';

export function togglePostForm() {
    return async (dispatch) => {
        console.log("Toggle Post Form Hit");

        dispatch({
            type: TOGGLE_POSTFORM
        })
    }
}


//Posts actions
export const GET_POSTS = 'GET_POSTS';

export function getPosts() {
    return async (dispatch) => {
        console.log("Get Posts Hit");

        const response = await fetch(`/api/posts`);
        console.log("response", response)
        const newPosts = await response.json();
        console.log(newPosts)
        // const newPosts = await response.json();

        dispatch({
            type: GET_POSTS,
            posts: newPosts
        })
    }
}

export const SAVE_POST = 'SAVE_POST';

export function savePost(title, content, author, img_url) {
    return async (dispatch) => {
        console.log("Save Post Hit");
        let response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                content: content,
                author: author,
                img_url: img_url
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        let newPost = await response.json();
        console.log("POST SAVED SUCCESSFULLY:", newPost);
        dispatch({
            type: SAVE_POST,
            post: newPost
        })
    }
}

//Comments Actions
export const GET_COMMENTS = 'GET_COMMENTS';

export function getComments() {
    return async (dispatch) => {
        console.log("Get Comments Hit");

        const response = await fetch(`/api/comments`);
        console.log("response", response)
        const newComments = await response.json();
        console.log(newComments)

        dispatch({
            type: GET_COMMENTS,
            comments: newComments
        })
    }
}

//Comments Actions
export const SAVE_COMMENT = 'SAVE_COMMENT';

export function saveComment(content, post_id) {
    return async (dispatch) => {
        console.log("Save Comments Hit");

        let response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({
                content: content,
                post_id: post_id
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        console.log("response", response)
        const newComment = await response.json();
        console.log(newComment)

        dispatch({
            type: SAVE_COMMENT,
            comment: newComment
        })
    }
}