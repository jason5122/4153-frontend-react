import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getThreads } from './api1.js'; // Fetch threads from the API

function Feed() {
  const [threads, setThreads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const threadsPerPage = 5;

  // Fetch threads when the component mounts
  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const threadData = await getThreads();
        setThreads(threadData);
      } catch (error) {
        console.error("Error fetching threads:", error);
      }
    };
    fetchThreads();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(threads.length / threadsPerPage);
  const startIndex = (currentPage - 1) * threadsPerPage;
  const currentThreads = threads.slice(startIndex, startIndex + threadsPerPage);

  // Change page
  const changePage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="feed-container">
      <h1>Threads</h1>
      <ul className="thread-list">
        {currentThreads.map((thread) => (
          <li key={thread.id} className="thread-item">
            <Link to={`/thread/${thread.id}`} className="thread-link">
              {thread.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => changePage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Feed;
