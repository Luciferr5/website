import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { ThemeToggle } from "./components/ThemeToggle";
import { Home } from "./components/sections/home";
import { Test } from "./components/sections/Test";
import { Work } from "./components/sections/Work";
import { Footer } from "./components/Footer";
import "./index.css";

// Home Page Component (combines Home and Test sections)
const HomePage = () => {
  return (
    <>
      <Home />
      <Test />
      <Footer />
    </>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <div
        className={`min-h-screen transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-white dark:bg-black text-gray-900 dark:text-gray-100 relative`}
      >
        {/* Star Background moved to individual pages */}
        
        {/* Theme Toggle Button */}
        {/* <ThemeToggle /> */}
        
        {/* Navigation - above background but below menu */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        {/* Main Content - above background */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;