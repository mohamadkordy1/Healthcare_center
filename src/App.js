import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import './appointment-style.css';
import './index.css';
import Home from "./pages/Home";
import Facility from "./pages/Facility";
import Appointment from "./pages/Appointment";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Navbar></Navbar>
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
      <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;