import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getThreads } from './api1.js'; // Import API function to fetch threads

function HomePage() {
  const [recentThreads, setRecentThreads] = useState([]);
  const [username, setUsername] = useState("Jerry"); // Default username

  useEffect(() => {
    const fetchRecentThreads = async () => {
      try {
        const threads = await getThreads();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        // Filter threads created within the last 7 days
        const filteredThreads = threads.filter((thread) => {
          const threadDate = new Date(thread.createdAt);
          return threadDate >= oneWeekAgo;
        });

        setRecentThreads(filteredThreads);
      } catch (error) {
        console.error('Error fetching recent threads:', error);
      }
    };

    fetchRecentThreads();
  }, []);

  useEffect(() => {
    // Load the username from localStorage
    const storedUsername = localStorage.getItem("username") || "Jerry";
    setUsername(storedUsername);
  }, []);

  return (
    <div className="home-container">
      <div className="main-header">
        <h1>Welcome, {username}!</h1> {/* Dynamic Greeting */}
      </div>
      <div className="recent-threads-container">
        <h1>Recent Threads</h1>
        {recentThreads.length > 0 ? (
          <ul className="thread-list">
            {recentThreads.map((thread) => (
              <li key={thread.id} className="thread-item">
                <Link to={`/thread/${thread.id}`} className="thread-link">
                  {thread.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No threads created in the last week.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
