import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaProjectDiagram, FaCertificate, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { path: "/certificates", label: "Certificates", icon: <FaCertificate /> },
    { path: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Suyash Portfolio
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={linkClass}
                  end
                >
                  <span className="text-sm">{link.icon}</span>
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                  end
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;