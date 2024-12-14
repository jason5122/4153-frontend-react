import React, { useState, useEffect } from "react";
import {
  getUsers,
  sendFriendRequest,
  getFriendRequests,
  respondToFriendRequest,
  getFriends,
} from "./friendsData";
import "./../css_files/AddFriend.css"; // Import the CSS file

function AddFriend() {
  const currentUserId = "1"; // Hardcoded current user ID (Alice)
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);

  // Fetch users, friend requests, and friends on load
  useEffect(() => {
    setUsers(getUsers());
    setFriendRequests(getFriendRequests(currentUserId));
    setFriends(getFriends(currentUserId));
    setPendingRequests([]);
  }, []);

  // Handle sending a friend request
  const handleSendRequest = (userId) => {
    sendFriendRequest(currentUserId, userId);
    setPendingRequests((prev) => [...prev, userId]);
  };

  // Handle accepting a friend request
  const handleAcceptRequest = (userId) => {
    respondToFriendRequest(currentUserId, userId, true);
    setFriendRequests((prev) => prev.filter((req) => req.userId !== userId));
    setFriends((prev) => [...prev, users.find((user) => user.id === userId)]);
  };

  // Handle rejecting a friend request
  const handleRejectRequest = (userId) => {
    respondToFriendRequest(currentUserId, userId, false);
    setFriendRequests((prev) => prev.filter((req) => req.userId !== userId));
  };

  // Render
  return (
    <div className="add-friend-container">
      <h1>Add Friend</h1>
      {/* Search users */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for users"
        className="search-input"
      />
      <h2>All Users</h2>
      <div className="scrollable-user-list">
        <ul className="user-list">
          {users
            .filter(
              (user) =>
                user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                user.id !== currentUserId // Exclude current user
            )
 // Display only 7 users
            .map((user) => (
              <li key={user.id} className="user-item">
                <span>{user.name}</span>
                {friends.some((friend) => friend.id === user.id) ? (
                  <button className="friend-button" disabled>
                    Friends
                  </button>
                ) : pendingRequests.includes(user.id) ? (
                  <button className="pending-button" disabled>
                    Request Sent
                  </button>
                ) : (
                  <button
                    className="add-button"
                    onClick={() => handleSendRequest(user.id)}
                  >
                    Add Friend
                  </button>
                )}
              </li>
            ))}
        </ul>
      </div>

      {/* Friend Requests */}
      <h2>Friend Requests</h2>
      <ul className="friend-request-list">
        {friendRequests.length > 0 ? (
          friendRequests.map((request) => (
            <li key={request.userId} className="request-item">
              <span>{request.name}</span>
              <button
                className="accept-button"
                onClick={() => handleAcceptRequest(request.userId)}
              >
                Accept
              </button>
              <button
                className="reject-button"
                onClick={() => handleRejectRequest(request.userId)}
              >
                Reject
              </button>
            </li>
          ))
        ) : (
          <p>No friend requests at this time.</p>
        )}
      </ul>

      {/* Friends */}
      <h2>Your Friends</h2>
      <ul className="friends-list">
        {friends.length > 0 ? (
          friends.map((friend) => (
            <li key={friend.id} className="friend-item">
              <span>{friend.name}</span>
            </li>
          ))
        ) : (
          <p>You have no friends yet.</p>
        )}
      </ul>
    </div>
  );
}

export default AddFriend;
