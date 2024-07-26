import { HashRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Faculty from "./pages/Faculty";
import Students from "./pages/Students";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Highlights from "./pages/Highlights";
import Footer from "./pages/Footer";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <img src="/images/School_Logo.png" alt="School Logo" />
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#academics">Academics</a>
            <a href="#admissions">Admissions</a>
            <a href="#faculty">Faculty</a>
            <a href="#students">Students</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact-us">Contact Us</a>
          </nav>
        </header>
        <main>
          <Home />
          <Highlights />
          <AboutUs />
          <Academics />
          <Admissions />
          <Faculty />
          <Students />
          <Gallery />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
