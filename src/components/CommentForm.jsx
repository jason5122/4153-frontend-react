import {useState} from 'react';

function CommentForm({
    handleSubmit, 
    submitLabel, 
    hasCancelButton = false, 
    initialText = '', 
    handleCancel 
}) {
    {/* create state to store typed text */}
    const [text, setText] = useState(initialText);
    
    {/* Disables submit button if text area is empty */}
    const isTextareaDisabled = text.length === 0;

    {/* Prevent form from submitting on default and after submitting, test area is reset to empty str */}
    const onSubmit = event => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    }
    return(
        <form onSubmit={onSubmit}>
            <textarea className = "comment-form-textarea" 
                value ={text}
                onChange={(e) => setText(e.target.value)} 
            />
            <button className="comment-form-button" disabled ={isTextareaDisabled}>{submitLabel}</button>
            {hasCancelButton && (
                <button
                    type="button" 
                    className="comment-form-button comment-form-cancel-button"
                    onClick={handleCancel}
                >
                    Cancel
                </button> 
            )}
        </form>
    );
}
export default CommentForm;