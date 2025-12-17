import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

// Pages
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Certificates from "./pages/Certificates.jsx";
import Contact from "./pages/Contact.jsx";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
