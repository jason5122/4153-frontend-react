import { useState, useEffect } from 'react';
import './../css_files/Settings.css';

function Settings() {
  const [username, setUsername] = useState("");
  const [notification, setNotification] = useState("");

  // Load the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "Jerry";
    setUsername(storedUsername);
  }, []);

  // Save the updated username to localStorage
  const handleSaveUsername = () => {
    if (username.trim() === "") {
      setNotification("Name cannot be blank!");
      return;
    }
    localStorage.setItem("username", username);
    setNotification("Display name updated successfully!");
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <p>Change your name:</p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        className="username-input"
      />
      <button onClick={handleSaveUsername} className="save-button">Save</button>
      {notification && <p className="notification">{notification}</p>}
    </div>
  );
}

export default Settings;
