import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check initial state and apply theme
    const applyTheme = () => {
      const root = document.documentElement;
      const body = document.body;
      
      if (isDarkMode) {
        root.classList.add("dark");
        body.classList.remove("bg-white");
        body.classList.add("bg-black");
        body.style.backgroundColor = "#000000";
        body.style.color = "#ffffff";
      } else {
        root.classList.remove("dark");
        body.classList.remove("bg-black");
        body.classList.add("bg-white");
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#000000";
      }
    };

    applyTheme();
  }, [isDarkMode]);

  const toggleTheme = () => {
    console.log("Theme toggle clicked! Current:", isDarkMode ? "dark" : "light");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 z-50 p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-110 max-sm:hidden shadow-lg"
      aria-label="Toggle theme"
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? (
        // Sun icon for switching to light mode
        <svg className="h-6 w-6 text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        // Moon icon for switching to dark mode
        <svg className="h-6 w-6 text-blue-900 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};