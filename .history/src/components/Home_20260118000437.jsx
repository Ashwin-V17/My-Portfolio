import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const typedElement = useRef(null);

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

  return (
    <section className="min-h-screen min-w-full pt-[10rem] pr-[9%] pb-8 pl-[9%] flex justify-between items-center gap-8 max-md:flex-col max-md:pt-[10rem] max-md:px-[3%]" id="home">
      <div className="home-content z-10 flex-1 animate-fadeInLeft">
        <h1 className="text-[5.6rem] font-bold leading-[1.3] max-md:text-[5rem] animate-fadeInUp">
          Hello, It&apos;s Me
        </h1>
        <h1 className="text-[5.6rem] font-bold leading-[1.3] max-md:text-[5rem] bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent animate-fadeInUp animation-delay-200">
          Ashwin
        </h1>
        <h3 className="text-[3.2rem] font-bold mb-8 max-md:text-[2.6rem] animate-fadeInUp animation-delay-400">
          And I&apos;m a <span ref={typedElement} className="text-accent whitespace-nowrap"></span>
        </h3>
        <p className="text-[1.6rem] max-w-[600px] leading-relaxed animate-fadeInUp animation-delay-600">
          Enthusiastic and motivated Full Stack Developer with a strong
          foundation in Core Java fundamentals and MERN Stack development.
        </p>

        <div className="social-media flex gap-4 animate-fadeInUp animation-delay-800">
          <a href="https://www.facebook.com/ashwin.V.17" title="Facebook" className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-accent rounded-full mt-12 text-[2rem] text-accent transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:shadow-[0_0_1rem_rgba(14,239,255,0.5)] hover:scale-110">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" title="Instagram" className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-accent rounded-full mt-12 text-[2rem] text-accent transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:shadow-[0_0_1rem_rgba(14,239,255,0.5)] hover:scale-110">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/ashwin-v-455b75245" title="LinkedIn" className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-accent rounded-full mt-12 text-[2rem] text-accent transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:shadow-[0_0_1rem_rgba(14,239,255,0.5)] hover:scale-110">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Ashwin-V17" title="GitHub" className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-accent rounded-full mt-12 text-[2rem] text-accent transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:shadow-[0_0_1rem_rgba(14,239,255,0.5)] hover:scale-110">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <a href="/assets/Ashwin's__Resume.pdf" className="inline-block bg-accent rounded-[4rem] px-11 py-4 shadow-[0_0_1rem_#0ef] tracking-wider text-[1.6rem] text-bg-secondary font-semibold transition-all duration-500 hover:shadow-[0_0_2rem_#0ef] hover:scale-105 mt-12 animate-fadeInUp animation-delay-1000" download="Ashwin-Resume">
          Download CV
        </a>
      </div>
      <div className="home-image flex-1 flex justify-end max-md:mt-16 max-md:justify-center animate-fadeInRight">
        <img src="/assets/Ashwin__1_-ai-brush-removebg-1jov1bs.png" alt="Ashwin" className="h-[80vh] w-auto max-w-[32vw] object-contain animate-float max-md:max-w-full filter drop-shadow-[0_0_2rem_rgba(14,239,255,0.3)]" />
      </div>
    </section>
  );
};

export default Home;