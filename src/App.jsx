import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import SEO from "./components/SEO";
import "./index.css";

// Lazy load components for code splitting
const Home = lazy(() => import("./components/sections/home"));
const Test = lazy(() => import("./components/sections/Test"));
const Work = lazy(() => import("./components/sections/Work"));
const Footer = lazy(() => import("./components/Footer"));

// Loading component for lazy-loaded routes
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
      <p className="text-gray-400 text-sm mt-2">Please wait...</p>
    </div>
  </div>
);

// Home Page Component
const HomePage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <SEO />
      <Home />
      <Test />
      <Footer />
    </Suspense>
  );
};

// Work Page Component
const WorkPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <SEO 
        title="Work Experience - Prakhar Saxena"
        description="Explore my professional journey: Data & AI Intern at EY, ML Research Assistant at McMaster University, and various leadership roles in tech and F1 podcasting."
        url="https://prakharsaxena.com/work"
      />
      <Work />
    </Suspense>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        
        <div
          className={`min-h-screen transition-all duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;