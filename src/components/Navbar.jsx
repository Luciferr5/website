import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../images/logo.png';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Function to handle smooth scroll for home page sections
  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      // If we're on the home page, scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] dark:bg-[rgba(0, 0, 0, 0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Prakhar Saxena" 
            className="h-10 w-auto hover:scale-105 transition-transform duration-200"
          />
        </Link>

          {/* Mobile menu toggle and dark mode toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <DarkModeToggle />
            <div
              className="w-7 h-5 relative cursor-pointer z-40"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              onClick={() => handleSectionClick("home")}
              className="text-white hover:text-transparent transition-colors duration-500 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text"
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={() => handleSectionClick("test")}
              className="text-white hover:text-transparent transition-colors duration-500 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text"
            >
              About
            </Link>
            <Link
              to="/work"
              className="text-white hover:text-transparent transition-colors duration-500 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text"
            >
              Work
            </Link>
            <a
              href="mailto:prakharsaxena5@outlook.com?subject=Hello%20Prakhar&body=Hi%20Prakhar,%0A%0AI%20came%20across%20your%20website%20and%20would%20love%20to%20connect!%0A%0ABest%20regards"
              className="text-white hover:text-transparent transition-colors duration-500 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text"
            >
              Contact
            </a>
            {/* Add some space before the toggle */}
            {/* <div className="ml-4">
              <DarkModeToggle />
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};