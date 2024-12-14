// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import {
//   getComments,
//   createComment,
//   deleteComment,
//   updateComment,
// } from './api1.js';
// import './../css_files/Thread.css';

// function Thread() {
//   const { threadId } = useParams();
//   const [comments, setComments] = useState([]);
//   const [currentUserId] = useState("1000");
//   const [userName, setUserName] = useState(""); // Username loaded dynamically
//   const [activeComment, setActiveComment] = useState(null);
//   const [replyText, setReplyText] = useState("");
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [commentToDelete, setCommentToDelete] = useState(null);

//   // Load the username from localStorage when the component mounts
//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username") || "Anonymous";
//     setUserName(storedUsername);
//   }, []);

//   // Fetch comments for the thread
//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const threadComments = await getComments(threadId);
//         setComments(threadComments);
//       } catch (error) {
//         console.error("Error fetching comments:", error);
//       }
//     };
//     fetchComments();
//   }, [threadId]);

//   const handleAddComment = async (text, parentId = null) => {
//     if (text.trim() === "") return;
//     try {
//       const newComment = await createComment(text, parentId, threadId, userName);
//       setComments((prevComments) => [...prevComments, newComment]);
//       setActiveComment(null);
//       setReplyText("");
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

//   const handleUpdateComment = async (text, commentId) => {
//     if (text.trim() === "") return;
//     try {
//       const updatedComment = await updateComment(text, commentId, threadId);
//       setComments((prevComments) =>
//         prevComments.map((comment) =>
//           comment.id === commentId ? { ...comment, body: updatedComment.body } : comment
//         )
//       );
//       setActiveComment(null);
//     } catch (error) {
//       console.error("Error updating comment:", error);
//     }
//   };

//   const handleConfirmDelete = async () => {
//     if (!commentToDelete) return;
//     try {
//       await deleteComment(commentToDelete, threadId);
//       setComments((prevComments) =>
//         prevComments.filter((comment) => comment.id !== commentToDelete)
//       );
//       setShowDeleteModal(false);
//       setCommentToDelete(null);
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//     }
//   };

//   const handleCancelDelete = () => {
//     setShowDeleteModal(false);
//     setCommentToDelete(null);
//   };

//   const renderComments = (parentId = null) => {
//     return comments
//       .filter((comment) => comment.parentId === parentId)
//       .map((comment) => (
//         <li key={comment.id} className="comment-item">
//           <p>
//             <strong>{comment.username}:</strong> {comment.body}
//           </p>
//           <p className="comment-date">
//             {new Date(comment.createdAt).toLocaleString()}
//           </p>
//           {activeComment?.id === comment.id && activeComment.type === "edit" ? (
//             <div>
//               <textarea
//                 defaultValue={comment.body}
//                 onChange={(e) => setReplyText(e.target.value)}
//               />
//               <button onClick={() => handleUpdateComment(replyText, comment.id)}>
//                 Update
//               </button>
//               <button onClick={() => setActiveComment(null)}>Cancel</button>
//             </div>
//           ) : (
//             <div>
//               {currentUserId === comment.userId && (
//                 <>
//                   <button
//                     onClick={() =>
//                       setActiveComment({ id: comment.id, type: "edit" })
//                     }
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => {
//                       setShowDeleteModal(true);
//                       setCommentToDelete(comment.id);
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </>
//               )}
//               {activeComment?.parentId === comment.id ? (
//                 <div>
//                   <textarea
//                     value={replyText}
//                     onChange={(e) => setReplyText(e.target.value)}
//                   />
//                   <button
//                     onClick={() => handleAddComment(replyText, comment.id)}
//                   >
//                     Reply
//                   </button>
//                   <button
//                     onClick={() => {
//                       setReplyText("");
//                       setActiveComment(null);
//                     }}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               ) : (
//                 <button
//                   onClick={() =>
//                     setActiveComment({
//                       id: comment.id,
//                       type: "reply",
//                       parentId: comment.id,
//                     })
//                   }
//                 >
//                   Reply
//                 </button>
//               )}
//             </div>
//           )}
//           <ul className="replies-list">{renderComments(comment.id)}</ul>
//         </li>
//       ));
//   };

//   return (
//     <div className="thread-container">
//       <h1>Thread: {threadId}</h1>
//       <div>
//         {activeComment?.type === "new" ? (
//           <div>
//             <textarea
//               placeholder="Add a new comment"
//               value={replyText}
//               onChange={(e) => setReplyText(e.target.value)}
//             />
//             <button onClick={() => handleAddComment(replyText)}>Comment</button>
//             <button
//               onClick={() => {
//                 setReplyText("");
//                 setActiveComment(null);
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         ) : (
//           <button onClick={() => setActiveComment({ type: "new" })}>
//             Add Comment
//           </button>
//         )}
//       </div>
//       <ul className="comments-list">
//         {comments.length > 0 ? renderComments() : <p>No comments available.</p>}
//       </ul>

//       {/* Modal for delete confirmation */}
//       {showDeleteModal && (
//         <div className="delete-modal">
//           <div className="modal-content">
//             <h3>Confirm Deletion</h3>
//             <p>Are you sure you want to delete this comment?</p>
//             <button onClick={handleConfirmDelete}>Yes</button>
//             <button onClick={handleCancelDelete}>No</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Thread;



import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  getThreadDetails,
  getComments,
  createComment,
  deleteComment,
  updateComment,
} from './api1.js'; // Adjusted for thread content
import './../css_files/Thread.css';

function Thread() {
  const { threadId } = useParams();
  const [threadDetails, setThreadDetails] = useState(null); // To hold thread title and content
  const [comments, setComments] = useState([]);
  const [currentUserId] = useState("1000");
  const [userName, setUserName] = useState(""); // Username loaded dynamically
  const [activeComment, setActiveComment] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);

  // Load the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "Anonymous";
    setUserName(storedUsername);
  }, []);

  useEffect(() => {
    console.log("Thread Details:", threadDetails);
  }, [threadDetails]);

  // Fetch thread details and comments
  useEffect(() => {
    const fetchThreadData = async () => {
      try {
        const details = await getThreadDetails(threadId);
        setThreadDetails(details);

        const threadComments = await getComments(threadId);
        setComments(threadComments);
      } catch (error) {
        console.error("Error fetching thread data:", error);
      }
    };
    fetchThreadData();
  }, [threadId]);

  const handleAddComment = async (text, parentId = null) => {
    if (text.trim() === "") return;
    try {
      const newComment = await createComment(text, parentId, threadId, userName);
      setComments((prevComments) => [...prevComments, newComment]);
      setActiveComment(null);
      setReplyText("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleUpdateComment = async (text, commentId) => {
    if (text.trim() === "") return;
    try {
      const updatedComment = await updateComment(text, commentId, threadId);
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId ? { ...comment, body: updatedComment.body } : comment
        )
      );
      setActiveComment(null);
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleConfirmDelete = async () => {
    if (!commentToDelete) return;
    try {
      await deleteComment(commentToDelete, threadId);
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentToDelete)
      );
      setShowDeleteModal(false);
      setCommentToDelete(null);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setCommentToDelete(null);
  };

  const renderComments = (parentId = null) => {
    return comments
      .filter((comment) => comment.parentId === parentId)
      .map((comment) => (
        <li key={comment.id} className="comment-item">
          <p>
            <strong>{comment.username}:</strong> {comment.body}
          </p>
          <p className="comment-date">
            {new Date(comment.createdAt).toLocaleString()}
          </p>
          {activeComment?.id === comment.id && activeComment.type === "edit" ? (
            <div>
              <textarea
                defaultValue={comment.body}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <button onClick={() => handleUpdateComment(replyText, comment.id)}>
                Update
              </button>
              <button onClick={() => setActiveComment(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              {currentUserId === comment.userId && (
                <>
                  <button
                    onClick={() =>
                      setActiveComment({ id: comment.id, type: "edit" })
                    }
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setShowDeleteModal(true);
                      setCommentToDelete(comment.id);
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
              {activeComment?.parentId === comment.id ? (
                <div>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                  <button
                    onClick={() => handleAddComment(replyText, comment.id)}
                  >
                    Reply
                  </button>
                  <button
                    onClick={() => {
                      setReplyText("");
                      setActiveComment(null);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() =>
                    setActiveComment({
                      id: comment.id,
                      type: "reply",
                      parentId: comment.id,
                    })
                  }
                >
                  Reply
                </button>
              )}
            </div>
          )}
          <ul className="replies-list">{renderComments(comment.id)}</ul>
        </li>
      ));
  };

  return (
    <div className="thread-container">
      <h1>{threadDetails?.title || "Loading..."}</h1>
      <div className="thread-content-block">
        <p>{threadDetails?.content || "No content available for this thread."}</p>
      </div>
      <div>
        {activeComment?.type === "new" ? (
          <div>
            <textarea
              placeholder="Add a new comment"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button onClick={() => handleAddComment(replyText)}>Comment</button>
            <button
              onClick={() => {
                setReplyText("");
                setActiveComment(null);
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button onClick={() => setActiveComment({ type: "new" })}>
            Add Comment
          </button>
        )}
      </div>
      <ul className="comments-list">
        {comments.length > 0 ? renderComments() : <p>No comments available.</p>}
      </ul>

      {/* Modal for delete confirmation */}
      {showDeleteModal && (
        <div className="delete-modal">
          <div className="modal-content">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this comment?</p>
            <button onClick={handleConfirmDelete}>Yes</button>
            <button onClick={handleCancelDelete}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Thread;
