import React, { useState } from "react";
import { createThread } from "./api1.js";
import "./../css_files/Post.css"; // Ensure you have a relevant CSS file for styling

function Post() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleCreateThread = async () => {
        if (title.trim() === "" || content.trim() === "") {
            alert("Both title and content are required.");
            return;
        }

        try {
            const newThread = await createThread(title, content);
            console.log("Created thread:", newThread);

            // Reset form fields and show success message
            setTitle("");
            setContent("");
            setSuccessMessage("Thread created successfully!");

            // Hide the success message after a few seconds
            setTimeout(() => setSuccessMessage(""), 3000);
        } catch (error) {
            console.error("Error creating thread:", error);
            alert("Failed to create thread. Please try again.");
        }
    };

    return (
        <div className="post-container">
            <h1>Create a New Thread</h1>

            {successMessage && <p className="success-message">{successMessage}</p>}

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleCreateThread();
                }}
            >
                <div className="form-group">
                    <label htmlFor="thread-title">Title:</label>
                    <input
                        id="thread-title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter thread title"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="thread-content">Content:</label>
                    <textarea
                        id="thread-content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter thread content"
                        required
                    />
                </div>

                <button type="submit" className="submit-button">
                    Create Thread
                </button>
            </form>
        </div>
    );
}

export default Post;
