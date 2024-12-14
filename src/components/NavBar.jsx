import { Link } from 'react-router-dom';
import './../css_files/Feed.css';

function NavBar() {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-logo">DinkDash</Link>
      <div className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/feed" className="nav-link">
              <i className="bx bx-home-alt nav-icon"></i>
              <span className="nav-name">Threads</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/post" className="nav-link">
              <i className="bx bxs-plus-square nav-icon"></i>
              <span className="nav-name">Post</span>
            </Link>
          </li>

          {/* <li className="nav-item">
            <a href="#play-stats" className="nav-link">
              <i className="bx bx-stats nav-icon"></i>
              <span className="nav-name">Play Stats</span>
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
