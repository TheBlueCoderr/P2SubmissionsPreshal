import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status
  useEffect(() => {
    const user = localStorage.getItem("userEmail");
    setIsLoggedIn(!!user);

    // Listen for login/logout changes
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("userEmail"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("userEmail"); 
    window.dispatchEvent(new Event("storage"));
    navigate("/"); 
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/postauction">Post Auction</Link></li>
        <li><Link>Help Desk</Link></li>
        {!isLoggedIn ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        ) : (
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
