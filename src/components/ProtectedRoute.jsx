import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("userEmail");

  console.log("User Authenticated:", isAuthenticated); 

  if (!isAuthenticated) {
    alert("You must log in first!"); 
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
