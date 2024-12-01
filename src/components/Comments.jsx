import { useState, useEffect } from 'react';
import {
    getComments as getCommentsApi, 
    createComment as createCommentApi, 
    deleteComment as deleteCommentApi,
    updateComment as updateCommentApi
} from './api.js'
import Comment from './Comment.jsx'
import CommentForm from './CommentForm.jsx'
import './../css_files/comments.css'

function Comments({currentUserId}){
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);

    {/* for fetching root comments, which are comments with NULL parentId */}
    const rootComments = backendComments.filter( 
        backendComment => backendComment.parentId === null);

    {/* get all replies (replies have same parent ID) and sort with latest comments last */}
    const getReplies = (commentId) => {
        return backendComments
        .filter(backendComment => backendComment.parentId === commentId)
        .sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
    }

    {/*
        Adds comment at the top after submitting via comment form
        New comments should be stored in db via backend APIs later 
    
        */}
    const addComment = (text, parentId) => {
        console.log("addComment", text, parentId);
        createCommentApi(text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments]);
            setActiveComment(null);
        })
    };

    {/* Delete comment by filtering for all other comments with different commentId */}
    const deleteComment = (commentId) => {
        if (window.confirm('Delete comment?')){
            deleteCommentApi(commentId).then(() => {
                const updatedBackendComment = backendComments.filter(
                    backendComment => backendComment.id !== commentId
                );
                setBackendComments(updatedBackendComment);

            })
        }
    };

    const updateComment = (text, commentId) => {
        updateCommentApi(text, commentId).then(() => {
            const updatedBackendComments = backendComments.map(backendComment => {
                {/* only update comment with the corresponding comment id */}
                if (backendComment.id === commentId){
                    return {...backendComment, body : text};
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        });
    };

    useEffect(() => {
        getCommentsApi().then(data => {
            setBackendComments(data)
        })
    }, [])
    return(
        <div className = "comments">
            <h3 className = "comments-title"> Comments </h3>
            <div className ="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Comment" handleSubmit ={addComment}/>
            <div className = "comments-container">
                {/* Get all root comments from backend */}
                {rootComments.map(rootComment => (
                    <Comment 
                    key={rootComment.id} 
                    comment={rootComment} 
                    replies={getReplies(rootComment.id)}
                    currentUserId={currentUserId}
                    deleteComment={deleteComment}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                    addComment = {addComment}
                    updateComment= {updateComment}
                    />
                ))}
            </div>
        </div>
    );
}
export default Comments;