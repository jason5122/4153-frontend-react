import './../css_files/Feed.css'

function NavBar(){
    return(
      <nav class = "nav-container">
        <a href = "#" class = "nav-logo"> DinkDash</a>
        <div class= "nav-menu">
          <ul class="nav-list">
            <li class="nav-item">
              <a href = "#feed" class ="nav-link">
              <i class='bx bx-home-alt nav-icon'></i>
                <span class="nav-name">Feed</span>
              </a>
            </li>
  
            <li class="nav-item">
              <a href = "#post" class ="nav-link">
              <i class='bx bxs-plus-square nav-icon'></i>
                <span class="nav-name">Post</span>
              </a>
            </li>
  
            <li class="nav-item">
              <a href = "#play-stats" class ="nav-link">
              <i class='bx bx-stats nav-icon' ></i>
                <span class="nav-name">Play Stats</span>
              </a>
            </li>
          </ul>
        </div>   
      </nav>
    );
  }

  export default NavBar; 