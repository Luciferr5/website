import { RevealOnScroll } from "../RevealOnScroll";
import profilePic from "../../images/IMG_2811.JPG";

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
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        {/* UPDATED: Changed max-w-3xl to max-w-6xl for wider layout */}
        <div className="max-w-6xl mx-auto px-4">
          {/* UPDATED: Changed mb-8 to mb-12 for more spacing */}
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Life outside tech.
          </h2>

          {/* NEW SECTION: Top Section - Profile Picture + About Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* NEW: Profile Picture Box */}
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
                  {/* <p className="text-gray-400 mt-2">Software Engineer & Student</p>
                  <p className="text-blue-500 text-sm mt-1">McMaster University</p> */}
                </div>
              </div>
            </div>

            {/* NEW: About Text Box (reorganized content from original) */}
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
                  href="/Resume-8.pdf" 
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

              {/* MOVED: Skills section from original layout, now more compact */}
              {/* <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4 text-white">Technical Skills</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-blue-400 font-medium mb-2">Frontend</p>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-blue-400 font-medium mb-2">Backend</p>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* NEW SECTION: Creative 4-Box Grid replacing the old education/work section */}
          {/* NEW SECTION: Prioritized Grid Layout */}
          <div className="grid grid-cols-4 grid-rows-3 gap-4 h-96 lg:h-[500px]">
            
            {/* F1 Box - LARGEST (spans 2x3) - YouTube Focus */}
            <div className="col-span-2 row-span-4 rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-b from-red-500/10 to-orange-500/10 hover:border-red-500/30">
              <div className="h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    🏎️
                  </div>
                  <h3 className="tech-center text-xl font-bold text-white">Co-Host of TheOversteerPodcast.</h3>
                </div>
                
                <div className="flex-1 flex flex-col">
                  {/* YouTube Podcast Preview - Larger */}
                  <div className="flex-1 p-4 bg-white/5 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all">
                    <a 
                      href="https://www.youtube.com/watch?v=OmS6E-3wd0A&t=711s" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block group h-full flex flex-col"
                    >
                      {/* Video Thumbnail - Much Larger */}
                      <div className="relative mb-4 rounded-lg overflow-hidden flex-1 min-h-[140px]">
                        <img 
                          src="https://img.youtube.com/vi/OmS6E-3wd0A/maxresdefault.jpg"
                          alt="F1 Podcast Thumbnail"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                        {/* Duration Badge */}
                        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm px-3 py-1 rounded">
                          11:51
                        </div>
                      </div>
                      
                      {/* Video Info */}
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">
                          Australian Grand Prix Race Review!
                        </h4>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                          </div>
                          <span className="text-gray-400 text-sm">TheOversteerPodcast</span>
                        </div>
                        {/* <p className="text-gray-400 text-sm leading-relaxed mb-3">
                          Deep analysis of F1 strategies, driver performances, and season predictions. 
                          Join me for weekly insights into the world of Formula 1 racing.
                        </p> */}
                        
                        {/* External Link Icon */}
                        <div className="flex items-center">
                          <span className="text-red-400 text-sm font-medium">Watch on YouTube</span>
                          <svg className="w-4 h-4 text-red-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  
                  {/* Quick F1 Stats - Compact at bottom */}
                  {/* <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <p className="text-white font-medium text-sm">Fav Driver</p>
                      <p className="text-red-400 text-sm">Max Verstappen</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <p className="text-white font-medium text-sm">Fav Track</p>
                      <p className="text-red-400 text-sm">Monaco</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Spotify Music Box - SECOND LARGEST (spans 2x2) - Interactive */}
            <div className="col-span-2 row-span-2 rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-br from-green-500/10 to-blue-500/10 hover:border-green-500/30">
              <div className="h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Now Playing</h3>
                </div>
                
                <div className="flex-1 flex flex-col">
                  {/* Album Art and Song Info */}
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-800 rounded-lg mr-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white text-sm">Not Playing</p>
                      <p className="text-gray-400 text-xs">Connect Spotify</p>
                    </div>
                  </div>
                  
                  {/* Music Controls */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                      </svg>
                    </button>
                    <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg">
                      <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-1 mb-2">
                    <div className="bg-green-500 h-1 rounded-full w-0"></div>
                  </div>
                  
                  <p className="text-gray-400 text-xs text-center">Ready to connect with Spotify API</p>
                </div>
              </div>
            </div>

            {/* Sports Box - Smaller (spans 2x1) */}
            <div className="col-span-2 row-span-1 rounded-xl p-4 border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-r from-yellow-500/10 to-orange-500/10 hover:border-yellow-500/30">
              <div className="h-full flex items-center">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                  ⚽
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Sports</h3>
                  <p className="text-gray-400 text-sm">Captain of a cricket intramural team @McMaster University.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};