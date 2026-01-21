import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const typedElement = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Full Stack Developer", "Web Developer", "Android Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen min-w-full pt-[10rem] pr-[9%] pb-8 pl-[9%] flex justify-between items-center gap-8 max-md:flex-col max-md:pt-[10rem] max-md:px-[3%] overflow-hidden" id="home">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
      </div>

      {/* Parallax Mouse Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-accent rounded-full opacity-30"></div>
      </div>

      <div className="home-content z-10 flex-1 animate-fadeInLeft">
        {/* Greeting with animation */}
        <div className="mb-4 animate-fadeInUp">
          <span className="text-[2rem] text-accent font-semibold tracking-wider uppercase opacity-80">
            Welcome to my portfolio
          </span>
        </div>
        
        <h1 className="text-[5.6rem] font-bold leading-[1.3] max-md:text-[5rem] animate-fadeInUp relative inline-block">
          Hello, It&apos;s Me
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-accent to-transparent animate-expandWidth"></span>
        </h1>
        
        <h1 className="text-[5.6rem] font-bold leading-[1.3] max-md:text-[5rem] bg-gradient-to-r from-accent via-blue-500 to-purple-500 bg-clip-text text-transparent animate-fadeInUp animation-delay-200 relative">
          Ashwin
          <span className="absolute -top-4 -right-4 text-[3rem] animate-wave">👋</span>
        </h1>
        
        <h3 className="text-[3.2rem] font-bold mb-8 max-md:text-[2.6rem] animate-fadeInUp animation-delay-400">
          And I&apos;m a <span ref={typedElement} className="text-accent whitespace-nowrap relative">
            <span className="absolute inset-0 blur-md bg-accent/30"></span>
          </span>
        </h3>
        
        <p className="text-[1.6rem] max-w-[600px] leading-relaxed animate-fadeInUp animation-delay-600 relative group">
          <span className="absolute -left-4 top-0 text-accent text-[4rem] opacity-20 font-serif">"</span>
          Enthusiastic and motivated Full Stack Developer with a strong
          foundation in Core Java fundamentals and MERN Stack development.
          <span className="absolute -right-4 bottom-0 text-accent text-[4rem] opacity-20 font-serif">"</span>
        </p>

        {/* Skills tags */}
        <div className="flex flex-wrap gap-3 mt-8 animate-fadeInUp animation-delay-700">
          {['React','React Native', 'Node.js', 'Java', 'MongoDB', 'Express'].map((skill, index) => (
            <span 
              key={skill}
              className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-medium text-accent hover:bg-accent/20 hover:scale-110 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="social-media flex gap-4 animate-fadeInUp animation-delay-800">
          <a href="https://www.facebook.com/ashwin.V.17" title="Facebook" className="group relative inline-flex justify-center items-center w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent border-2 border-accent rounded-full mt-12 text-[2rem] text-accent transition-all duration-500 hover:border-blue-500 hover:rotate-12 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-br from-accent to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <i className="fa-brands fa-facebook relative z-10 group-hover:text-white group-hover:scale-110 transition-all duration-300"></i>
          </a>
          <a href="#" title="Instagram" className="group relative inline-flex justify-center items-center w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent border-2 border-accent rounded-full mt-12 text-[2rem] text-accent transition-all duration-500 hover:border-pink-500 hover:rotate-12 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <i className="fa-brands fa-instagram relative z-10 group-hover:text-white group-hover:scale-110 transition-all duration-300"></i>
          </a>
          <a href="https://www.linkedin.com/in/ashwin-v-455b75245" title="LinkedIn" className="group relative inline-flex justify-center items-center w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent border-2 border-accent rounded-full mt-12 text-[2rem] text-accent transition-all duration-500 hover:border-blue-600 hover:rotate-12 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-br from-blue-600 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <i className="fa-brands fa-linkedin relative z-10 group-hover:text-white group-hover:scale-110 transition-all duration-300"></i>
          </a>
          <a href="https://github.com/Ashwin-V17" title="GitHub" className="group relative inline-flex justify-center items-center w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent border-2 border-accent rounded-full mt-12 text-[2rem] text-accent transition-all duration-500 hover:border-gray-400 hover:rotate-12 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-br from-gray-700 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <i className="fa-brands fa-github relative z-10 group-hover:text-white group-hover:scale-110 transition-all duration-300"></i>
          </a>
        </div>
        
        <a href="/assets/Ashwin's__Resume.pdf" className="group relative inline-block bg-gradient-to-r from-accent to-blue-500 rounded-[4rem] px-11 py-4 tracking-wider text-[1.6rem] text-white font-semibold transition-all duration-500 hover:shadow-[0_0_2rem_#0ef,0_0_4rem_#0ef] hover:scale-105 mt-12 animate-fadeInUp animation-delay-1000 overflow-hidden" download="Ashwin-Resume">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative z-10 flex items-center gap-2">
            <i className="fa-solid fa-download"></i>
            Download CV
            <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
          </span>
        </a>
      </div>
      
      <div className="home-image flex-1 flex justify-end max-md:mt-16 max-md:justify-center animate-fadeInRight relative">
        {/* Glowing ring around image */}
        <div className="absolute inset-0 flex items-center justify-end max-md:justify-center">
          <div className="w-[32vw] h-[80vh] max-md:w-full rounded-full bg-gradient-to-r from-accent/20 via-blue-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative group">
          <img src="../../public/assets/Ashwin__1_-ai-brush-removebg-1jov1bs.png" alt="Ashwin" className="h-[80vh] w-auto max-w-[32vw] object-contain animate-float max-md:max-w-full filter drop-shadow-[0_0_3rem_rgba(14,239,255,0.4)] relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_4rem_rgba(14,239,255,0.6)] group-hover:scale-105" />
          
          {/* Decorative elements around image */}
          <div className="absolute top-10 -right-10 w-20 h-20 border-4 border-accent/50 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 -left-10 w-16 h-16 border-4 border-blue-500/50 rotate-45 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;