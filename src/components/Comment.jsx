import CommentForm from './CommentForm.jsx'

function Comment({
    comment, 
    replies, 
    currentUserId, 
    deleteComment, 
    activeComment, 
    updateComment,
    addComment,
    setActiveComment, 
    parentId = null,
}){
    
    {/* 
        users can only reply if they're logged in 
        users not logged in have a user-id value of "Now"
        users logged in have a user-id non-zero value
        users can only edit and delte if they wrote the comment
    */}
    const canReply = Boolean(currentUserId)
    const canEdit = currentUserId === comment.userId
    const canDelete = currentUserId === comment.userId
    
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id;

    const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id;
    
    {/* replies are either under parent comment or new comment */}
    const replyId = parentId ? parentId: comment.id;
    

    return(
        <div className = "comment">
            <div className="comment-image-container">
                <img src="/user-icon.png"/>
            </div>
            <div className="comment-right-part">
                <div className = "comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div>{createdAt}</div>
                </div>
                {!isEditing && <div className="comment-text">{comment.body}</div>}
                {isEditing && (
                    <CommentForm 
                        submitLabel = "Update" 
                        hasCancelButton 
                        initialText={comment.body} 
                        handleSubmit={(text) => updateComment(text, comment.id)} 
                        handleCancel={() => setActiveComment(null)}
                    />
                )}
                
                <div className="comment-actions">
                    {/* While replying, set state to replying state */}
                    {canReply && (
                        <div className="comment-action" 
                        onClick={() => setActiveComment({id: comment.id, type: "replying"})}
                        >
                            Reply
                            </div>
                        )}
                    {/* While editing, set state to editing state */}
                    {canEdit && (
                        <div className="comment-action"
                        onClick={() => setActiveComment({id: comment.id, type: "editing"})}
                        >
                            Edit
                            </div>
                        )}
                    {canDelete && (
                        <div 
                            className="comment-action" 
                            onClick={() => deleteComment(comment.id)}
                        >
                            Delete</div>
                        )}
                </div>
                {/* If is replying to a comment, generate comment form */}
                {isReplying && (
                    <CommentForm 
                        submitLabel = "Reply"  
                        handleSubmit={(text) => addComment(text, replyId)}
                    />
                )}

                {/* Render non-empty replies */}
                {/* replies are empty array because we don't want replies to have nested comments too */}
                {replies.length > 0 && (
                    <div className = "replies">
                        {replies.map(reply => (
                            <Comment 
                            comment ={reply} 
                            key={reply.id} 
                            replies={[]}
                            currentUserId={currentUserId}
                            deleteComment={deleteComment}
                            addComment = {addComment}
                            updateComment = {updateComment}
                            activeComment = {activeComment}
                            setActiveComment={setActiveComment}
                            parentId = {comment.id}
                            /> 
                        ))} 
                    </div>

                )}
            </div>
        </div>
    );
}
export default Comment;