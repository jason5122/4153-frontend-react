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
import { useParams , useLocation } from 'react-router-dom';


function Comments({currentUserId}){
    const [isLoading, setLoading] = useState(false);
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    
    const threadKey = useParams().threadKey
    const threadTitle = useLocation().state.threadTitle



    {/* 
        fetches root comments corresponding to the proper thread and have NULL parentId
     */}
    const rootComments = backendComments.filter( 
        (backendComment) => backendComment.threadKey === threadKey &&  backendComment.parentId === null);

        
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
        createCommentApi(text, threadKey, threadTitle, parentId).then(comment => {
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
        setLoading(true);
        /*REPLACE GET COMMENTS API WITH ENDPOINT HERE 
        const request = axios.get('').then( ...... ) */
        getCommentsApi().then( data => {
            setBackendComments(data)
        })
        setLoading(false);
        
    }, [])



    return(
        <div className = "comments">
            <h3 className = "comments-title"> {threadTitle} </h3>
            <div className ="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Comment" handleSubmit ={addComment}/>
            {!isLoading && 
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
            }
            {isLoading && <h2> Loading Comments ...</h2> }
        </div>
    );
}
export default Comments;