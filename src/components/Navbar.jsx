import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
 function Navbar() {
  return (
    <header>
      <div className="container nav">
        <h2 className="logo" style={{ color: "#007bff" }}>Health Care</h2>

        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/facility">facility</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/contact">contact</Link></li>
       
        </ul>
      </div>
    </header>
  );
}export default Navbar;