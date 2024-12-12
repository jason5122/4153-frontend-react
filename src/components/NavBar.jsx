import './../css_files/NavBar.css'
import { Link } from 'react-router-dom'


function NavBar(){
    return(
      <nav className = "nav-container">
        <Link to={`/`} className = "nav-logo"> DinkDash </Link>
        <div className= "nav-menu">
          <ul className="nav-list">
            <li className="nav-item">      
                <Link to={`/`} className = "nav-link">
                  <i className='bx bx-home-alt nav-icon'></i>
                  Feed
                </Link>
            </li>
  
            <li className="nav-item">
              <a href = "#post" className ="nav-link">
              <i className='bx bxs-plus-square nav-icon'></i>
                <span className="nav-name">Post</span>
              </a>
            </li>
  
            <li className="nav-item">
              <a href = "#play-stats" className ="nav-link">
              <i className='bx bx-stats nav-icon' ></i>
                <span className="nav-name">Play Stats</span>
              </a>
            </li>
          </ul>
        </div>   
      </nav>
    );
  }

  export default NavBar; 