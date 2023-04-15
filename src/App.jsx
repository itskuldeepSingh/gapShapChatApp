import Login from "./pages/Login"
import Rejister from "./pages/Rejister";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const currentUser = useContext(AuthContext)

  if (!currentUser) {
    return <Navigate to="/login" />;
  } 

  return (
    <Router>
      <Routes>
          <Route path="/home" element={<Home /> }/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Rejister />} />
          <Route path="*" element={<Login /> }/>
      </Routes>
    </Router>
  )
}

export default App;
