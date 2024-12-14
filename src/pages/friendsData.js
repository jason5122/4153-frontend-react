// Mock data for users and friend relationships
let users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
  { id: "4", name: "Dana" },
  { id: "5", name: "Eve" },
  { id: "6", name: "Frank" },
  { id: "7", name: "Grace" },
  { id: "8", name: "Hank" },
  { id: "9", name: "Ian" },
  { id: "10", name: "Jane" },
  { id: "11", name: "Kyle" },
  { id: "12", name: "Liam" },
  { id: "13", name: "Mia" },
  { id: "14", name: "Noah" },
  { id: "15", name: "Olivia" },
  { id: "16", name: "Paul" },
  { id: "17", name: "Quinn" },
  { id: "18", name: "Rachel" },
  { id: "19", name: "Sam" },
  { id: "20", name: "Tina" },
];

let friendRequests = [
  { fromUserId: "2", toUserId: "1" }, 
  { fromUserId: "5", toUserId: "1" }, 
  { fromUserId: "6", toUserId: "3" },
  { fromUserId: "7", toUserId: "4" }, 
  { fromUserId: "9", toUserId: "2" }, 
  { fromUserId: "12", toUserId: "1" }, 
  { fromUserId: "15", toUserId: "1" }, 
];

let friendships = [
  { userId1: "1", userId2: "4" }, 
  { userId1: "3", userId2: "5" }, 
  { userId1: "6", userId2: "7" }, 
  { userId1: "8", userId2: "9" }, 
  { userId1: "10", userId2: "11" }, 
  { userId1: "12", userId2: "13" }, 
  { userId1: "14", userId2: "15" }, 
  { userId1: "16", userId2: "17" }, 
  { userId1: "18", userId2: "19" }, 
  { userId1: "20", userId2: "1" }, 
];


// Get all users
export const getUsers = () => {
  return users;
};

// Get friend requests for a user
export const getFriendRequests = (userId) => {
  return friendRequests
    .filter((req) => req.toUserId === userId)
    .map((req) => {
      const fromUser = users.find((user) => user.id === req.fromUserId);
      return { userId: req.fromUserId, name: fromUser.name };
    });
};

// Send a friend request
export const sendFriendRequest = (fromUserId, toUserId) => {
  // Check if a friend request already exists or they are already friends
  const alreadyRequested = friendRequests.some(
    (req) => req.fromUserId === fromUserId && req.toUserId === toUserId
  );
  const alreadyFriends = friendships.some(
    (friend) =>
      (friend.userId1 === fromUserId && friend.userId2 === toUserId) ||
      (friend.userId2 === fromUserId && friend.userId1 === toUserId)
  );

  if (!alreadyRequested && !alreadyFriends) {
    friendRequests.push({ fromUserId, toUserId });
  }
};

// Respond to a friend request (accept or reject)
export const respondToFriendRequest = (toUserId, fromUserId, accept) => {
  // Remove the friend request
  friendRequests = friendRequests.filter(
    (req) => !(req.fromUserId === fromUserId && req.toUserId === toUserId)
  );

  if (accept) {
    // Add to friendships if accepted
    friendships.push({ userId1: fromUserId, userId2: toUserId });
  }
};

// Get friends of a user
export const getFriends = (userId) => {
  return friendships
    .filter(
      (friend) => friend.userId1 === userId || friend.userId2 === userId
    )
    .map((friend) => {
      const friendId =
        friend.userId1 === userId ? friend.userId2 : friend.userId1;
      return users.find((user) => user.id === friendId);
    });
};
