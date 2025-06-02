import { Link, useLocation, useNavigate } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle navigation and close menu
  const handleNavigation = (sectionId = null) => {
    setMenuOpen(false);
    
    if (sectionId) {
      if (location.pathname === "/") {
        // If we're on the home page, scroll to section
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // If we're on a different page, navigate to home then scroll
        navigate("/");
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <Link
        to="/"
        onClick={() => handleNavigation("home")}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        Home
      </Link>

      <button
        onClick={() => handleNavigation("test")}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        About
      </button>

      <Link
        to="/work"
        onClick={() => handleNavigation()}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Work
      </Link>

      <a
        href="mailto:prakharsaxena5@outlook.com?subject=Hello%20Prakhar&body=Hi%20Prakhar,%0A%0AI%20came%20across%20your%20website%20and%20would%20love%20to%20connect!%0A%0ABest%20regards"
        onClick={() => handleNavigation()}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Contact
      </a>
    </div>
  );
};