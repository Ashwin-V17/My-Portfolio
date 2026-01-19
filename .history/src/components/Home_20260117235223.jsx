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
    <section className="min-h-screen min-w-f pt-[10rem] pr-[9%] pb-8 pl-[9%] flex justify-center items-center max-md:flex-col max-md:pt-[10rem] max-md:px-[3%]" id="home">
      <div className="home-content z-10">
        <h1 className="text-[5.6rem] font-bold leading-[1.3] max-md:text-[5rem]">Hello, It&apos;s Me</h1>
        <h1 className="text-[5.6rem] font-bold leading-[1.3] max-md:text-[5rem]">Ashwin</h1>
        <h3 className="text-[3.2rem] font-bold mb-8 max-md:text-[2.6rem]">
          And I&apos;m a <span ref={typedElement} className="text-accent"></span>
        </h3>
        <p className="text-[1.6rem]">
          "Enthusiastic and motivated Full Stack Developer with a strong
          foundation in Core Java fundamentals and MERN Stack development."
        </p>

        <div className="social-media">
          <a 
            href="https://www.facebook.com/ashwin.V.17" 
            title="social-media"
            className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-accent rounded-full mt-12 mr-6 mb-12 ml-0 text-[2rem] text-text-primary transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:p-3"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a 
            href="#" 
            title="social-media"
            className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-accent rounded-full mt-12 mr-6 mb-12 ml-0 text-[2rem] text-text-primary transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:p-3"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ashwin-v-455b75245"
            title="social-media"
            className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-accent rounded-full mt-12 mr-6 mb-12 ml-0 text-[2rem] text-text-primary transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:p-3"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/Ashwin-V17" 
            title="social-media"
            className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-accent rounded-full mt-12 mr-6 mb-12 ml-0 text-[2rem] text-text-primary transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:p-3"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <a
          href="/assets/Ashwin's__Resume.pdf"
          className="inline-block bg-accent rounded-[4rem] px-11 py-4 shadow-[0_0_1rem_#0ef] tracking-wider text-[1.6rem] text-bg-secondary font-semibold transition-all duration-500 hover:shadow-none"
          download="Ashwin-Resume"
        >
          Download CV
        </a>
      </div>
      <div className="home-image w-full object-contain px-[14%] max-md:mt-16">
        <img 
          src="/assets/Ashwin__1_-ai-brush-removebg-1jov1bs.png" 
          alt="Ashwin" 
          className="h-[80vh] w-[32vw] object-cover animate-float max-md:w-full max-md:object-center"
        />
      </div>
    </section>
  );
};

export default Home;