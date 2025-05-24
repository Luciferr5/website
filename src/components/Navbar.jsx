import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-3xl font-bold text-white">
            {" "}
            Prakhar<span className="text-blue-500"> Saxena</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-transparent transition-colors duration-500 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text"
            >
              Home
            </a>

            <a
              href="#test"
              className="text-white hover:text-transparent transition-colors duration-500 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-white hover:text-transparent transition-colors duration-500 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="mailto:prakharsaxena5@outlook.com?subject=Hello%20Prakhar&body=Hi%20Prakhar,%0A%0AI%20came%20across%20your%20website%20and%20would%20love%20to%20connect!%0A%0ABest%20regards"
              className="text-white hover:text-transparent transition-colors duration-500 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};