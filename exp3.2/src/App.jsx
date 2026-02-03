import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

/* Home Component */
function Home() {
  return (
    <div className="content">
      <h2>Experiment-2: same</h2>

      <section className="box">
        <h3>Aim</h3>
        <p>
          Nav(3.2) (SPA)
          using the React Router <strong>Link</strong> component.
        </p>
      </section>

      
    </div>
  );
}

/* About Component */
function About() {
  return (
    <div className="content">
      <h2>Hehehehe</h2>
      <p>
        Very nice website great styling i like it.
      </p>
    </div>
  );
}

/* Contact Component */
function Contact() {
  return (
    <div className="content">
      <h2>Conclusion</h2>
      <p>
        Hello hello hello
        the <strong>Hehehehe</strong> haha.
      </p>
    </div>
  );
}

/* Main App */
function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className="nav-container">
          <div className="logo">Shhhhh</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Conclusion</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
