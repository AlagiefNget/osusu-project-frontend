import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Registration from "./components/Signup/Registration";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/signup" element={<Registration />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
