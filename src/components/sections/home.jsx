import { RevealOnScroll } from "../RevealOnScroll";
import { Robot } from "../Robot";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-8"
    >
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
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#projects"
                  className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                >
                  Contact Me
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