{/* TEMPORARY BACKEND DATA */}
export const getComments = async () => {
    return [
      {
        threadKey: '123',
        threadTitle: 'Thread 1',
        id: "1",
        body: "First comment",
        username: "Jack",
        userId: "1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        threadKey: '123',
        threadTitle: 'Thread 1',
        id: "2",
        body: "Second comment",
        username: "John",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        threadKey: '123',
        threadTitle: 'Thread 1',
        id: "3",
        body: "First comment first child",
        username: "John",
        userId: "2",
        parentId: "1",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        threadKey: '123',
        threadTitle: 'Thread 1',
        id: "4",
        body: "Second comment second child",
        username: "John",
        userId: "2",
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        threadKey: '123',
        threadTitle: 'Thread 1',
        id: "5",
        body: "Third Comment",
        username: "Jam",
        userId: "3",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+03:00",
      },
      {
        threadKey: '125',
        threadTitle: 'Thread 2',
        id: "6",
        body: "Fourth Comment",
        username: "Cloudy",
        userId: "4",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+04:00",
      },
      {
        threadKey: '125',
        threadTitle: 'Thread 2',
        id: "7",
        body: "Fifth Comment",
        username: "It's raining",
        userId: "5",
        parentId: null,
        createdAt: "2021-08-17T23:00:33.010+05:00",
      },
    ];
  };
  
  {/*   
    Below are MOCK functions that should return information from the backend 
    userId should not be passed to the createComment API, backened should know this via which user is logged in
    createComment is for comments under the same thread. 
    */}
  export const createComment = async (text,  threadKey, threadTitle, parentId = null) => {
    return {
        threadKey: threadKey,
        threadTitle: threadTitle,
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: "1",
        username: "John",
        createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };