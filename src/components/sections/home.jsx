import { RevealOnScroll } from "../RevealOnScroll";
import { Robot } from "../Robot";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-8 bg-white dark:bg-black transition-colors duration-300"    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[75vh] -mt-8">
            
            {/* Content Section - Left Side */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Prakhar Saxena 
              </h1>

              <p className="text-gray-400 text-2xl lg:text-3xl mb-8">
                Engineering the future.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex justify-center lg:justify-start space-x-6">
                {/* GitHub Icon */}
                <a
                  href="https://github.com/Luciferr5" // Replace with your GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:-translate-y-1"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                {/* LinkedIn Icon */}
                <a
                  href="https://linkedin.com/in/prakharsaxena1" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:-translate-y-1"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Mail Icon */}
                <a
                  href="mailto:prakharsaxena5@outlook.com?subject=Hello%20Prakhar&body=Hi%20Prakhar,%0A%0AI%20came%20across%20your%20website%20and%20would%20love%20to%20connect!%0A%0ABest%20regards"
                  className="group transition-all duration-300 hover:-translate-y-1"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Robot Section - Right Side */}
            <div className="order-1 lg:order-2 h-full overflow-hidden">
              <div className="w-[180%] h-[80vh] lg:h-[100vh] min-h-[500px] relative -translate-x-[40%]">
                <Robot />
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;