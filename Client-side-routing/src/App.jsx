import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <div className="content">
        <h2>Hello, Namaste</h2>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="page">
      <div className="content">
        <div className="card">
          <img src="img.jpeg" alt="Profile" className="profile-img" />
          <h3>Yash Tanwar</h3>
          <p>Frontend Developer</p>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="page">
      <div className="content">
        <div className="card">
          <h3>My Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className="nav-container">
          <div className="logo">Hehehehe</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;