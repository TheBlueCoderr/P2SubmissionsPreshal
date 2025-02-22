import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import PostAuction from "./pages/PostAuction";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";  
function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/"; 

  return (
    <div>
      {!hideNavbar && <Navbar />} 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/postauction" 
          element={
            <ProtectedRoute>
              <PostAuction />
            </ProtectedRoute>
          } 
        />

        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
