import { useState, useEffect, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Footer } from "../Footer";
import EY from '../../images/ey.png';
import ArrInd from '../../images/ArrayInd.png';
import SPC from '../../images/SPC.jpeg';
import stabl from '../../images/stabl.jpeg';
import Mac from '../../images/Mac.png';
import Eko from '../../images/eko.jpeg';
import F1 from '../../images/f1.png';
import p1 from '../../images/project1.png';
import Lungs from '../../images/lungs.jpeg';
import Among from '../../images/among-us-logo.jpg';
import Maths from '../../images/math.png';
import p2 from '../../images/project2.png';
import analysis from '../../images/analysis.png';
import ToDo from '../../images/to-do.png';


export const Work = () => {
  const [activeTab, setActiveTab] = useState("work");
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  // Handle scroll progress for timeline
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineElement = timelineRef.current;
      const rect = timelineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress based on viewport
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const elementBottom = elementTop + elementHeight;
      
      // Start progress when element enters viewport from bottom
      // Complete progress when element exits viewport from top
      let progress = 0;
      
      if (elementBottom > 0 && elementTop < windowHeight) {
        // Element is visible
        if (elementTop <= 0) {
          // Element top is above viewport
          const visibleFromTop = Math.min(windowHeight, elementBottom);
          progress = ((windowHeight - visibleFromTop) / elementHeight) * 100;
        } else {
          // Element top is in viewport
          const visibleFromBottom = windowHeight - elementTop;
          progress = (visibleFromBottom / elementHeight) * 100;
        }
      }
      
      // Ensure progress is between 0 and 100
      progress = Math.min(100, Math.max(0, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeTab]); // Re-run when tab changes

  const tabs = [
    { id: "work", label: "Work", count: 5 },
    { id: "leadership", label: "Leadership", count: 2 },
    { id: "projects", label: "Projects", count: 7 }
  ];

  const experiences = {
    work: [
      {
        year: "Summer 2025",
        type: "WORK",
        title: "Data & AI Intern",
        subtitle: "Ernst & Young (EY) • Lagos, NG",
        description: "Incoming Data & AI Intern in the Technology Consulting services line. Working on enterprise AI solutions and data analytics for clients.",
        technologies: ["Python", "SQL", "Machine Learning", "Vector Databases"],
        achievements: [
          "Currently integrating an AI model with a Vector database using a RAG service to make AI Assistants for various EY clients accross various industries."
        ],
        logo: EY,
        companyUrl: "https://www.ey.com/en_ng"
      },
      {
        year: "Jan 2025 - Present",
        type: "WORK",
        title: "Machine Learning Research Assistant",
        subtitle: "McMaster University - ChemAI Lab • Hamilton, ON",
        description: "Collaborated with a team on the development of a multi-modal molecule prediction model(Spectro) using IR and NMR data to explore applications of AI in chemistry at McMaster University, achieving an accuracy of 93%.",
        technologies: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Hugging Face Transformers", "PowerPoint"],
        achievements: [
          "Fine-tuned a CNN-based vision model for functional group prediction from images, achieving an f1 score of 91%.",
          "Designed and tuned an RNN with an LSTM decoder, achieving 93% accuracy in molecule prediction.",
          "Utilized LLaMA 3 and GPT-2 to generate embeddings from NMR text data, enabling multimodal integration.",
          "Implemented a complete ML pipeline in TensorFlow, incorporating data augmentation, oversampling, cross-validation, custom learning rate scheduling, and distributed training."
        ],
        logo: Mac,
        companyUrl: "https://www.mcmaster.ca"
      },
      {
        year: "Summer 2024",
        type: "WORK",
        title: "Coding Intructor",
        subtitle: "Fondation STaBL Foundation • Hamilon, ON",
        description: "Providing comprehensive Elm sprint coding lessons to students across diverse educational institutions, for the McMaster start learning program.",
        technologies: ["ELM"],
        achievements: [
          "Devised engaging and interactive class sessions to ensure an enjoyable learning experience for young minds.",
          "Skillfully prepared students to showcase their acquired knowledge and coding proficiency by participating in WORDATHON 2023, where they excelled in the competition through their coding prowess.",
        ],
        logo: stabl,
        companyUrl: "https://stablfoundation.org"
      },
      {
        year: "Summer 2023",
        type: "WORK",
        title: "Web Development Intern",
        subtitle: "Seven-Up Bottling Company • Lagos, NG",
        description: "Developed a secure login page for customers to report damaged or incorrectly delivered goods.",
        technologies: ["ReactJS", "Swagger API", "HTLM/CSS", "Tailwind CSS", "Figma"],
        achievements: [
          "Developed a low-fidelity prototype using ReactJS to create a secure login system for customers to report spoiled, damaged, or incorrectly delivered products in a CI/CD pipeline.",
          "Leveraged the Swagger API platform for seamless API development and integration while demonstrating technical proficiency and problem-solving skills in web development, increasing customer satisfaction ratings by 15%.",
          "Conducted user research to pinpoint pain points in the user interface experience, leading to a 30% increase in user satisfaction by implementing targeted improvements."
        ],
        logo: SPC,
        companyUrl: "https://www.sevenup.org"
      },
      {
        year: "December 2022",
        type: "WORK",
        title: "Full Stack Developer Intern ",
        subtitle: "ArrayIndex Inc.• Burlingtno, ON",
        description: "Converted a static HTML webpage to a React web page using JavaScript and ReactJS to allow dynamic functionality.",
        technologies: ["ReactJS", "HTLM/CSS", "Tailwind CSS", "Python"],
        achievements: [
          "Worked on hosting the site on a third-party service railway.com(PaaS).",
          "Developed a back-end service web crawler using Python and existing libraries to increase site-wide flow by 20% users.          ",
        ],
        logo: ArrInd,
        companyUrl: "https://arrayindex-website-react.onrender.com"
      }
      
    ],
    leadership: [
      {
        year: "2023",
        type: "LEADERSHIP",
        title: "Co-Host",
        subtitle: "TheOversteerPodcast",
        description: "Leading weekly Formula 1 analysis podcast with a growing audience.",
        technologies: ["Content Creation", "YouTube"],
        achievements: [
          "Built engaged audience across multiple platforms",
          "Managed content creation and distribution.",
          "Collaborated with co-host for consistent delivery"
        ],
        logo: F1
      },
      {
        year: "2020",
        type: "LEADERSHIP",
        title: "Founder and President",
        subtitle: "Interact Club of Eko Atlantic",
        description: "Founded a non-profit organization.",
        technologies: [ "Team Leadership", "Fundraising", "Event Planning"],
        achievements: [
          "Founded and led team of 16 volunteers",
          "Raised ₦250,000 for local orphanages",
          "Coordinated planting of 300+ trees for environmental sustainability"
        ],
        logo: Eko
      }
    ],
    projects: [
      {
        year: "December 2024",
        type: "PROJECT",
        title: "Lung Cancer Detector",
        subtitle: "Machine Learning Project",
        description: "Implemented Random Forest Classifier using Scikit-learn to predict lung cancer with high accuracy, including complete preprocessing and deployment pipeline.",
        technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Joblib"],
        achievements: [
          "Achieved 98.5% accuracy in lung cancer prediction",
          "Preprocessed 309 entries reducing processing time by 40%",
          "Deployed predictive pipeline for real-time diagnosis"
        ],
        thumbnail: Lungs,
        link: "https://github.com/Luciferr5/lung-cancer-detector"
      },
      {
        year: "January 2024",
        type: "PROJECT",
        title: "Sorting algorithms analysis",
        subtitle: "Algorithms implementation in Python.",
        description: "This project examines and compares various shortest path algorithms, with an emphasis on Dijkstra’s and Bellman-Ford algorithms, and explores the A* algorithm as a more advanced option.",
        technologies: ["Python", "MatPlotLib", "TimeIt", "NumPy", "Sorting Algorithms"],
        achievements: [
          "Implemented the 3 sorting algorithms and analyzed their performance in various scenarios, and compared their efficiency with different data sets.",
          "Understood trade-offs between different algorithms and determine which is best suited for specific types of problems."
        ],
        thumbnail: analysis,
        link: "https://github.com/Luciferr5/Sorting-algorithms-analysis/tree/main"
      },
      {
        year: "September 2023",
        type: "PROJECT",
        title: "Abstrcat Shape Collision Detector",
        subtitle: "Java Project",
        description: "Developed a Java application to manage geometric shape interactions using a preset UML class diagram.",
        technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Joblib"],
        achievements: [
          "Engineered and optimized intersection algorithms to distinguish direct overlaps from edge contacts, reducing redundancy and enhancing code efficiency.",
          "Conducted extensive testing to ensure accurate functionality and flawless execution with a success rate of 95%, achieving error-free compilation and adherence to precise software specifications.",
        ],
        thumbnail: p2,
        link: "https://github.com/Luciferr5/ShapeCollisionDetector"
      },
      {
        year: "Summer 2023",
        type: "PROJECT",
        title: "To-Do List Web App",
        subtitle: "First react project",
        description: "Built a to-do list web app to improve productivity and time-management.",
        technologies: ["ReactJS", "HTML/CSS", "Bootstrap", "TailwindCSS"],
        achievements: [
          "Added functionality such as, editing and deleting to-do's.",
          "Used TailwindCSS to make the website more vibrant."
        ],
        thumbnail: ToDo,
        link: "https://github.com/Luciferr5/To-Do-App"
      },
      {
        year: "April 2022",
        type: "PROJECT",
        title: "Math Visualizer Educator",
        subtitle: "McMaster University",
        description: "An interactive web-based application that teaches children algebraic sequences and series through engaging learning modules, comprehensive question banks, and educational videos.",
        technologies: ["ELM", "Algebra"],
        achievements: [
          "Built an interactive study platform to teach sequences and series.",
          "Developed interactive teaching segments, and question banks."
        ],
        thumbnail: Maths,
        link: "https://stabl.rocks/ShowModulePublish?modulePublishId=feff7e89-7e47-46a6-affd-4551e711f6d1" 
      },
      {
        year: "March 2022",
        type: "PROJECT",
        title: "Among Us Clone",
        subtitle: "McMaster University",
        description: "A web based clone of the popular game - Among Us.",
        technologies: ["ELM"],
        achievements: [
          "Built interactive 2D map with 3 interactive games and states.",
          "Developed all components, functionalities, and state management from scratch, ensuring seamless integration."
        ],
        thumbnail: Among,
        link: "https://github.com/Luciferr5/AmongUs/tree/main" 
      },
      {
        year: "January 2022",
        type: "PROJECT",
        title: "Sierpinski's Hexagon",
        subtitle: "McMaster University",
        description: "Built a recursive animation showing a version of Sierpinski's Hexagon, with a slider going back and fourth through the recursive steps.",
        technologies: ["ELM", "Recursion"],
        achievements: [
          "Built a recursive animation showing a version of Sierpinski's Hexagon, with a slider going back and fourth through the recursive steps.",
        ],
        thumbnail: p1,
        link: "https://stabl.rocks/ShowModulePublish?modulePublishId=ef4f1b23-007d-477b-8abc-953fd6161a9c"
      }
    ]
  };

  const currentExperiences = experiences[activeTab] || [];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Experience
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                My professional journey and achievements
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <RevealOnScroll>
            <div className="flex justify-center mb-12">
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-full p-2 border border-gray-700">
                <div className="flex space-x-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-purple-600 text-white shadow-lg"
                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                      }`}
                    >
                      {tab.label} ({tab.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative" ref={timelineRef}>
            {/* Timeline Line with Progress */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-700 rounded-full">
              <div 
                className="w-full bg-gradient-to-b from-blue-500 to-purple-600 transition-all duration-500 ease-out rounded-full shadow-lg"
                style={{ 
                  height: `${scrollProgress}%`,
                  boxShadow: scrollProgress > 0 ? '0 0 10px rgba(147, 51, 234, 0.5)' : 'none'
                }}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {currentExperiences.map((experience, index) => (
                <RevealOnScroll key={index}>
                  <div className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-black shadow-xl z-10" />
                    
                    {/* Content */}
                    <div className="ml-20 w-full">
                      {/* Year Badge */}
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-gray-500">
                          {experience.year}
                        </span>
                      </div>

                      {/* Experience Card */}
                      <div className="bg-gray-900/40 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                        
                        {/* Header with Logo (only for work and leadership) */}
                        {experience.logo && (
                          <div className="flex items-start mb-4">
                            <div className="flex items-center gap-4">
                              {/* Company Logo - Now Clickable */}
                              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
                                {experience.companyUrl ? (
                                  <a
                                    href={experience.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                                    title={`Visit ${experience.subtitle.split('•')[0].trim()} website`}
                                  >
                                    <img
                                      src={experience.logo}
                                      alt={`${experience.title} logo`}
                                      className="w-8 h-8 object-contain"
                                      onError={(e) => {
                                        // Fallback to colored circle with first letter if logo fails to load
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                      }}
                                    />
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full items-center justify-center text-white font-bold text-sm hidden">
                                      {experience.title.charAt(0)}
                                    </div>
                                  </a>
                                ) : (
                                  <>
                                    <img
                                      src={experience.logo}
                                      alt={`${experience.title} logo`}
                                      className="w-8 h-8 object-contain"
                                      onError={(e) => {
                                        // Fallback to colored circle with first letter if logo fails to load
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                      }}
                                    />
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full items-center justify-center text-white font-bold text-sm hidden">
                                      {experience.title.charAt(0)}
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Project Thumbnail (only for projects) */}
                        {experience.thumbnail && (
                          <div className="mb-6">
                            <a
                              href={experience.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block relative w-full h-48 rounded-lg overflow-hidden border border-gray-600 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                            >
                              <img
                                src={experience.thumbnail}
                                alt={`${experience.title} thumbnail`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  // Fallback to gradient background if thumbnail fails to load
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 items-center justify-center text-white hidden">
                                <div className="text-center">
                                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                                    </svg>
                                  </div>
                                  <p className="text-sm opacity-75">Project Preview</p>
                                </div>
                              </div>
                              
                              {/* Hover Overlay with Link Icon */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </div>
                              </div>

                              {/* View Project Badge */}
                              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="bg-purple-600/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
                                  View Project
                                </span>
                              </div>
                            </a>
                          </div>
                        )}

                        {/* Title and Subtitle */}
                        <div className={!experience.logo && !experience.thumbnail ? 'mt-4' : ''}>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {experience.title}
                          </h3>
                          <p className="text-purple-400 mb-4 font-medium">
                            {experience.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-white font-semibold mb-3">Responsibilities:</h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="text-gray-300 flex items-start">
                                <span className="text-purple-500 mr-3 mt-1 text-sm">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-white">Let's Work Together</h2>
              <p className="text-gray-400 mb-6">
                I'm always interested in new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/Resume-8.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] inline-flex items-center justify-center gap-2"
                >
                  Download Resume
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                  </svg>
                </a>
                <a
                  href="mailto:prakharsaxena5@outlook.com?subject=Work%20Opportunity&body=Hi%20Prakhar,%0A%0AI%20came%20across%20your%20work%20experience%20and%20would%20love%20to%20discuss%20opportunities.%0A%0ABest%20regards"
                  className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-lg font-medium transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                >
                  Get In Touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};