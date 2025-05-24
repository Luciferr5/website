import { RevealOnScroll } from "../RevealOnScroll";
import { SpotifyPlayer } from "../Spotify";
import profilePic from "../../images/IMG_2811.JPG";
import stocksImage from "../../images/stocks.JPG";

export const Test = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="test"
      className="min-h-screen py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Life outside tech.
          </h2>

          {/* Profile Picture + About Text Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Profile Picture Box */}
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-xl overflow-hidden border-4 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  <img
                    src={profilePic}
                    alt="Prakhar Saxena"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Prakhar | pra-car
                  </h3>
                </div>
              </div>
            </div>

            {/* About Text Box */}
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Who I Am
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                I'm a third-year Computer Science student at McMaster University with a minor in Statistics. 
                My fascination with technology began early when my father introduced me to solving mathematical 
                problems using Microsoft Excel, sparking a curiosity that drives me today.
                </p>
                
                <p>
                I'm passionate about harnessing artificial intelligence and data science to tackle complex 
                challenges using cutting-edge technologies. Currently, I'm developing Spectro—an innovative 
                multi-modal molecular prediction system that integrates IR and NMR data, achieving 93% accuracy 
                in molecular analysis as a Machine Learning Research Assistant at McMaster University. 
                You can view my resume{" "}
                <a 
                  href="/Resume-7.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors inline-flex items-center gap-1"
                >
                  here.
                  <svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                  </svg>
                </a>
                </p>
                
                <p>
                  When I'm not hunching into my laptop screen, I stay active through gym workouts and 
                  intramural sports, I enjoy watching and talking about Formula 1 racing on TheOversteerPodcast, and discovering new music.
                </p>
              </div>
            </div>
          </div>

          {/* NEW: Reorganized 4-Section Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[600px]">
            
            {/* F1 Podcast - Top Left */}
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-b from-red-500/10 to-orange-500/10 hover:border-red-500/30">
              <div className="h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    🏎️
                  </div>
                  <h3 className="text-xl font-bold text-white">Co-Host of TheOversteerPodcast</h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                I'm a very outgoing and extroverted person, which helps me connect with new people and confidently 
                share the things I'm passionate about. Catch a glimpse below 👇🏻.
                </p>
                
                {/* YouTube Preview */}
                <div className="flex-1 p-4 bg-white/5 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all">
                  <a 
                    href="https://www.youtube.com/watch?v=OmS6E-3wd0A&t=711s" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group h-full flex flex-col"
                  >
                    <div className="relative mb-3 rounded-lg overflow-hidden flex-1 min-h-[120px]">
                      <img 
                        src="https://img.youtube.com/vi/OmS6E-3wd0A/maxresdefault.jpg"
                        alt="F1 Podcast Thumbnail"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        11:51
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-bold text-sm mb-2 group-hover:text-red-400 transition-colors">
                        Australian Grand Prix Race Review!
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="text-red-400 text-xs font-medium">Watch on YouTube</span>
                        <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Music Player - Top Right */}
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-br from-green-500/10 to-blue-500/10 hover:border-green-500/30">
              <SpotifyPlayer />
            </div>

            {/* Stock Portfolio - Bottom Left */}
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-br from-green-600/10 to-emerald-500/10 hover:border-green-500/30">
              <div className="h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    📈
                  </div>
                  <h3 className="text-xl font-bold text-white">Stock Portfolio</h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Active investor tracking market trends and building a diversified portfolio. 
                  Focused on growth stocks, tech companies, and emerging market opportunities with data-driven investment strategies.
                </p>
                
                {/* Portfolio Preview */}
                <div className="flex-1 flex flex-col">
                  <a 
                    href="https://share.blossomsocial.com/NyUKvTLPbLbQFJvEA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group flex-1"
                  >
                    <div className="relative h-full rounded-lg overflow-hidden border border-green-500/20 hover:border-green-500/40 transition-all group-hover:scale-[1.02]">
                      <img
                        src={stocksImage}
                        alt="Stock Portfolio"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <span className="text-green-400 text-sm font-medium">View Portfolio</span>
                          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Intramural Sports - Bottom Right */}
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-r from-yellow-500/10 to-orange-500/10 hover:border-yellow-500/30">
              <div className="h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    ⚽
                  </div>
                  <h3 className="text-xl font-bold text-white">Intramural Sports</h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Captain of a competitive cricket intramural team at McMaster University. 
                  Leading team strategy, coordinating practices, and fostering teamwork while staying active and building lasting friendships.
                </p>
                
                {/* Sports Visual/Stats */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-3xl">🏏</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Role:</span>
                        <span className="text-white font-medium">Captain</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Sport:</span>
                        <span className="text-white font-medium">Cricket</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">University:</span>
                        <span className="text-white font-medium">McMaster</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};