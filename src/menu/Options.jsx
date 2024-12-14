// import { useState, useEffect, useRef } from 'react';

// function MenuBar() {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const menuRef = useRef(null);
//   const buttonRef = useRef(null);

//   const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         menuRef.current && !menuRef.current.contains(event.target) &&
//         buttonRef.current && !buttonRef.current.contains(event.target)
//       ) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="menu-bar">
//       <button ref={buttonRef} className="menu-btn" onClick={toggleDropdown}>
//         Menu
//       </button>
//       {isDropdownOpen && (
//         <ul ref={menuRef} className="dropdown">
//           <li className="nav-item">
//             <a href="#settings" className="nav-link">
//               <i className="bx bx-cog nav-icon"></i>
//               <span className="nav-name">Settings</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#add-friend" className="nav-link">
//               <i className="bx bx-user-plus nav-icon"></i>
//               <span className="nav-name">Add Friend</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#logout" className="nav-link">
//               <i className="bx bx-log-out nav-icon"></i>
//               <span className="nav-name">Log Out</span>
//             </a>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default MenuBar;


import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MenuBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="menu-bar">
      <button ref={buttonRef} className="menu-btn" onClick={toggleDropdown}>
        Menu
      </button>
      {isDropdownOpen && (
        <ul ref={menuRef} className="dropdown">
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              <i className="bx bx-cog nav-icon"></i>
              <span className="nav-name">Settings</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-friend" className="nav-link">
              <i className="bx bx-user-plus nav-icon"></i>
              <span className="nav-name">Add Friend</span>
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link logout-button" onClick={handleLogout}>
              <i className="bx bx-log-out nav-icon"></i>
              <span className="nav-name">Log Out</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MenuBar;

