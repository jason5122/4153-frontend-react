const mockThreads = [
  {
    id: "thread-1",
    title: "Best Pickleball Paddles for Beginners",
    content: "Discuss and recommend the best pickleball paddles for those just starting out.",
    createdAt: "2024-12-01T10:00:00.000Z",
    comments: [
      {
        id: "1",
        body: "I think the Selkirk Latitude is a great starter paddle!",
        username: "Alice",
        userId: "1",
        parentId: null,
        createdAt: "2024-12-01T12:00:33.010+02:00",
      },
      {
        id: "2",
        body: "I've heard good things about the Onix Z5 too.",
        username: "Bob",
        userId: "2",
        parentId: "1",
        createdAt: "2024-12-01T12:10:33.010+02:00",
      },
    ],
  },
  {
    id: "thread-2",
    title: "What Shoes Are Best for Pickleball?",
    content: "Share your thoughts on the best shoes for comfort and performance.",
    createdAt: "2024-12-02T09:30:00.000Z",
    comments: [
      {
        id: "3",
        body: "Court shoes are a must! Asics Gel-Rocket is my go-to.",
        username: "Charlie",
        userId: "3",
        parentId: null,
        createdAt: "2024-12-02T10:00:00.010+02:00",
      },
      {
        id: "4",
        body: "Totally agree! Regular running shoes just don’t cut it.",
        username: "Dana",
        userId: "4",
        parentId: "3",
        createdAt: "2024-12-02T10:15:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-3",
    title: "Best Pickleball Spots in NYC",
    content: "Looking for the best places to play pickleball in New York City. Suggestions?",
    createdAt: "2024-12-03T08:00:00.000Z",
    comments: [
      {
        id: "5",
        body: "Central Park courts are pretty popular.",
        username: "Eve",
        userId: "5",
        parentId: null,
        createdAt: "2024-12-03T09:00:00.010+02:00",
      },
      {
        id: "6",
        body: "Also check out Hudson River Park—it’s a great spot for weekends.",
        username: "Frank",
        userId: "6",
        parentId: null,
        createdAt: "2024-12-03T09:30:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-4",
    title: "Pickleball Strategies for Doubles Play",
    content: "Share your tips and tricks for improving doubles play.",
    createdAt: "2024-12-04T18:00:00.000Z",
    comments: [
      {
        id: "7",
        body: "Communication with your partner is key!",
        username: "Grace",
        userId: "7",
        parentId: null,
        createdAt: "2024-12-04T18:30:00.010+02:00",
      },
      {
        id: "8",
        body: "Absolutely, and always stay patient at the net.",
        username: "Hank",
        userId: "8",
        parentId: "7",
        createdAt: "2024-12-04T18:45:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-5",
    title: "Indoor vs. Outdoor Pickleballs: Which Is Better?",
    content: "Discuss the differences and preferences between indoor and outdoor balls.",
    createdAt: "2024-12-05T10:00:00.000Z",
    comments: [
      {
        id: "9",
        body: "Outdoor balls are more durable, but indoor balls are easier to control.",
        username: "Ian",
        userId: "9",
        parentId: null,
        createdAt: "2024-12-05T10:15:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-6",
    title: "Warm-Up Routines for Pickleball",
    content: "What warm-up routines work best for you before a game?",
    createdAt: "2024-12-06T15:00:00.000Z",
    comments: [
      {
        id: "10",
        body: "I like to do some light jogging and dynamic stretches.",
        username: "Jane",
        userId: "10",
        parentId: null,
        createdAt: "2024-12-06T15:30:00.010+02:00",
      },
      {
        id: "11",
        body: "Stretching is great, but don’t forget to practice a few serves.",
        username: "Kyle",
        userId: "11",
        parentId: "10",
        createdAt: "2024-12-06T15:45:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-7",
    title: "How to Prevent Pickleball Injuries",
    content: "Share your advice on avoiding injuries while playing pickleball.",
    createdAt: "2024-12-07T11:00:00.000Z",
    comments: [
      {
        id: "12",
        body: "Proper footwear is essential. Don’t play in old running shoes.",
        username: "Liam",
        userId: "12",
        parentId: null,
        createdAt: "2024-12-07T11:30:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-8",
    title: "Pickleball Equipment Maintenance Tips",
    content: "How do you take care of your paddles and balls to make them last longer?",
    createdAt: "2024-12-08T13:00:00.000Z",
    comments: [
      {
        id: "13",
        body: "Clean your paddle regularly and keep it out of extreme temperatures.",
        username: "Mia",
        userId: "13",
        parentId: null,
        createdAt: "2024-12-08T13:30:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-9",
    title: "Fun Pickleball Drills for Beginners",
    content: "What are some simple and fun drills for new players to practice?",
    createdAt: "2024-12-09T14:00:00.000Z",
    comments: [
      {
        id: "14",
        body: "Dinking drills are great for control and patience.",
        username: "Noah",
        userId: "14",
        parentId: null,
        createdAt: "2024-12-09T14:15:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-10",
    title: "Pickleball Tournament Etiquette",
    content: "What are the dos and don’ts during a tournament?",
    createdAt: "2024-12-10T16:00:00.000Z",
    comments: [
      {
        id: "15",
        body: "Always call the score loudly and clearly before serving.",
        username: "Olivia",
        userId: "15",
        parentId: null,
        createdAt: "2024-12-10T16:15:00.010+02:00",
      },
      {
        id: "16",
        body: "And remember to thank your opponents after the game.",
        username: "Paul",
        userId: "16",
        parentId: "15",
        createdAt: "2024-12-10T16:30:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-11",
    title: "Best Pickleball Brands in 2024",
    content: "What brands are dominating pickleball equipment this year?",
    createdAt: "2024-12-11T14:00:00.000Z",
    comments: [
      {
        id: "17",
        body: "Selkirk and Onix are still top-notch in my opinion!",
        username: "Quinn",
        userId: "17",
        parentId: null,
        createdAt: "2024-12-11T14:10:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-12",
    title: "How to Practice Pickleball Solo",
    content: "Any tips or drills for practicing pickleball alone?",
    createdAt: "2024-12-12T08:00:00.000Z",
    comments: [
      {
        id: "18",
        body: "A wall drill works wonders! Just hit the ball against a wall to practice consistency.",
        username: "Rachel",
        userId: "18",
        parentId: null,
        createdAt: "2024-12-12T08:15:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-13",
    title: "Pickleball for Kids",
    content: "How can we make pickleball fun and engaging for children?",
    createdAt: "2024-12-13T09:00:00.000Z",
    comments: [
      {
        id: "19",
        body: "Mini-games like target practice keep kids entertained!",
        username: "Sam",
        userId: "19",
        parentId: null,
        createdAt: "2024-12-13T09:30:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-14",
    title: "Best Pickleball Tournaments for Beginners",
    content: "Any recommendations for tournaments suited for new players?",
    createdAt: "2024-12-14T10:00:00.000Z",
    comments: [
      {
        id: "20",
        body: "The local YMCA leagues are great for beginners.",
        username: "Tina",
        userId: "20",
        parentId: null,
        createdAt: "2024-12-14T10:15:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-15",
    title: "Common Pickleball Mistakes",
    content: "What mistakes should beginners watch out for?",
    createdAt: "2024-12-15T11:00:00.000Z",
    comments: [
      {
        id: "21",
        body: "Don’t stand too close to the kitchen line unless you're ready to volley!",
        username: "Uma",
        userId: "21",
        parentId: null,
        createdAt: "2024-12-15T11:30:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-16",
    title: "How to Improve Reaction Time in Pickleball",
    content: "Any exercises to boost reflexes on the court?",
    createdAt: "2024-12-16T12:00:00.000Z",
    comments: [
      {
        id: "22",
        body: "Agility ladder drills really help sharpen reflexes!",
        username: "Victor",
        userId: "22",
        parentId: null,
        createdAt: "2024-12-16T12:15:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-17",
    title: "Best Snacks for Pickleball Tournaments",
    content: "What snacks keep you energized during a long tournament?",
    createdAt: "2024-12-17T13:00:00.000Z",
    comments: [
      {
        id: "23",
        body: "Bananas and trail mix are my go-to snacks!",
        username: "Wendy",
        userId: "23",
        parentId: null,
        createdAt: "2024-12-17T13:15:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-18",
    title: "Top Pickleball Accessories",
    content: "What accessories do you swear by on the court?",
    createdAt: "2024-12-18T14:00:00.000Z",
    comments: [
      {
        id: "24",
        body: "Sweatbands and paddle grips are a must!",
        username: "Xander",
        userId: "24",
        parentId: null,
        createdAt: "2024-12-18T14:15:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-19",
    title: "Pickleball Rules FAQs",
    content: "What rules do new players often get confused about?",
    createdAt: "2024-12-19T15:00:00.000Z",
    comments: [
      {
        id: "25",
        body: "The double-bounce rule trips up a lot of beginners!",
        username: "Yara",
        userId: "25",
        parentId: null,
        createdAt: "2024-12-19T15:15:00.010+02:00",
      },
    ],
  },
  {
    id: "thread-20",
    title: "Pickleball Weight Loss Success Stories",
    content: "Has playing pickleball helped you lose weight? Share your story!",
    createdAt: "2024-12-20T16:00:00.000Z",
    comments: [
      {
        id: "26",
        body: "Absolutely! I lost 15 pounds after playing 3x a week for 6 months.",
        username: "Zane",
        userId: "26",
        parentId: null,
        createdAt: "2024-12-20T16:15:00.010+02:00",
      },
    ],
  },
];



const initializeThreads = () => {
  const storedThreads = localStorage.getItem("threads");
  
  if (!storedThreads) {
    console.log("Initializing threads with mock data...");
    localStorage.setItem("threads", JSON.stringify(mockThreads));
  } else {
    console.log("Threads already in localStorage:", JSON.parse(storedThreads));
  }
};


// Initialize threads on first load
initializeThreads();

// Fetch all threads
export const getThreads = async () => {
  const threads = JSON.parse(localStorage.getItem("threads"));
  return threads.map(({ id, title, createdAt }) => ({ id, title, createdAt }));
};

export const createThread = async (title, content) => {
  const threads = JSON.parse(localStorage.getItem("threads")) || [];
  const newThread = {
    id: Math.random().toString(36).substr(2, 9),
    title,
    content: content || "No content provided.", // Default content if none is provided
    createdAt: new Date().toISOString(),
    comments: [],
  };

  threads.unshift(newThread);
  localStorage.setItem("threads", JSON.stringify(threads));
  return newThread;
};



// Fetch comments for a specific thread
export const getComments = async (threadId) => {
  const threads = JSON.parse(localStorage.getItem("threads"));
  const thread = threads.find((t) => t.id === threadId);
  return thread ? thread.comments : [];
};

// Add a new comment to a specific thread
export const createComment = async (text, parentId = null, threadId, username) => {
  const threads = JSON.parse(localStorage.getItem("threads"));
  const thread = threads.find((t) => t.id === threadId);
  if (!thread) throw new Error("Thread not found");

  const newComment = {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1000",
    username: username || "Anonymous",
    createdAt: new Date().toISOString(),
  };

  thread.comments.push(newComment);
  localStorage.setItem("threads", JSON.stringify(threads));
  return newComment;
};

export const getThreadDetails = async (threadId) => {
  const threads = JSON.parse(localStorage.getItem("threads"));
  const thread = threads.find((t) => t.id === threadId);
  if (!thread) throw new Error("Thread not found");

  return {
    title: thread.title,
    content: thread.content || "No content provided.",
  };
};



// Update a comment
export const updateComment = async (text, commentId, threadId) => {
  const threads = JSON.parse(localStorage.getItem("threads"));
  const thread = threads.find((t) => t.id === threadId);
  if (!thread) throw new Error("Thread not found");

  const comment = thread.comments.find((c) => c.id === commentId);
  if (!comment) throw new Error("Comment not found");

  comment.body = text;
  localStorage.setItem("threads", JSON.stringify(threads));
  return comment;
};

// Delete a comment
export const deleteComment = async (commentId, threadId) => {
  const threads = JSON.parse(localStorage.getItem("threads"));
  const thread = threads.find((t) => t.id === threadId);
  if (!thread) throw new Error("Thread not found");

  thread.comments = thread.comments.filter((c) => c.id !== commentId);
  localStorage.setItem("threads", JSON.stringify(threads));
  return {};
};