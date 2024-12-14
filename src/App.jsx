import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.jsx';
import MenuBar from './menu/Options.jsx';
import Settings from './pages/Settings.jsx';
import AddFriend from './pages/AddFriend.jsx';
import Post from './pages/Post.jsx';
import Thread from './pages/Thread.jsx';
import Feed from './pages/Feed.jsx';
import HomePage from './pages/HomePage.jsx'; // Combined Greeting and RecentThreads
import Login from './pages/Login.jsx'; // Import Login page

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes that don't include the NavBar */}
        <Route path="/login" element={<Login />} />

        {/* Routes that include the NavBar */}
        <Route
          path="*"
          element={
            <>
              <NavBar />
              <MenuBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/add-friend" element={<AddFriend />} />
                <Route path="/thread/:threadId" element={<Thread />} />
                <Route path="/post" element={<Post />} />
                <Route path="/feed" element={<Feed />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
