import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import Homepage from "./components/Homepage/Homepage";
import Members from "./components/Members/Members";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
