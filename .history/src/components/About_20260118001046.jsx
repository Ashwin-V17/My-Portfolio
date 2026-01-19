import { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { number: '75%', label: 'Academic Score' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies' },
  ];

  const interests = [
    { icon: 'fa-music', name: 'Music', color: 'from-pink-500 to-purple-500' },
    { icon: 'fa-baseball', name: 'Cricket', color: 'from-green-500 to-blue-500' },
    { icon: 'fa-code', name: 'Coding', color: 'from-accent to-blue-500' },
  ];

  return (
    <section className="relative min-h-screen pt-[10rem] pr-[9%] pb-8 pl-[9%] flex justify-center items-center gap-16 bg-bg-secondary max-md:flex-col-reverse max-md:pt-[10rem] max-md:px-[3%] max-md:gap-8 overflow-hidden" id="about">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Image Section */}
      <div className="about-img relative w-full flex items-center justify-center max-md:mt-16 animate-fadeInLeft group">
        {/* Decorative circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[35vw] h-[35vw] max-md:w-[80vw] max-md:h-[80vw] border-2 border-accent/20 rounded-full animate-spin-slow"></div>
          <div className="absolute w-[30vw] h-[30vw] max-md:w-[70vw] max-md:h-[70vw] border-2 border-dashed border-blue-500/20 rounded-full animate-spin-reverse"></div>
        </div>

        {/* Glowing effect behind image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[32vw] h-[80vh] max-md:w-[70%] max-md:h-auto rounded-full bg-gradient-to-br from-accent/20 via-blue-500/20 to-purple-500/20 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
        </div>

        <img 
          src="/assets/Ashwin__1_-ai-brush-removebg-1jov1bs.png" 
          alt="Ashwin" 
          className="relative z-10 h-[80vh] w-[32vw] object-cover scale-[1.4] max-md:w-[70%] max-md:h-auto filter drop-shadow-[0_0_2rem_rgba(14,239,255,0.3)] group-hover:drop-shadow-[0_0_3rem_rgba(14,239,255,0.5)] group-hover:scale-[1.45] transition-all duration-700"
        />

        {/* Floating badges */}
        <div className="absolute top-10 left-10 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-2xl px-4 py-2 animate-float max-md:hidden">
          <span className="text-accent font-bold">💻 Full Stack</span>
        </div>
        <div className="absolute bottom-20 right-10 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-4 py-2 animate-float animation-delay-500 max-md:hidden">
          <span className="text-blue-400 font-bold">☕ Java Dev</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content flex-1 z-10 animate-fadeInRight">
        {/* Section badge */}
        <div className="mb-4 animate-fadeInUp">
          <span className="text-[1.4rem] text-accent font-semibold tracking-wider uppercase opacity-80 border-l-4 border-accent pl-4">
            Get to know me
          </span>
        </div>

        <h2 className="text-left text-[4.5rem] font-bold leading-[1.2] max-md:text-[3.5rem] animate-fadeInUp animation-delay-200">
          About <span className="text-accent bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">Me</span>
        </h2>
        
        <h3 className="text-[2.6rem] font-bold mb-6 max-md:text-[2rem] animate-fadeInUp animation-delay-300 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Full Stack Developer!
        </h3>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 my-8 animate-fadeInUp animation-delay-400">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-2xl p-4 text-center hover:border-accent/40 hover:scale-105 transition-all duration-300 group"
            >
              <h4 className="text-[2.5rem] font-bold text-accent group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </h4>
              <p className="text-[1.2rem] text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="animate-fadeInUp animation-delay-500">
          <p className="text-[1.6rem] leading-relaxed text-gray-300 max-md:text-[1.4rem]">
            I&apos;m <span className="text-accent font-semibold">Ashwin</span> from Chennai. I graduated with a Bachelor of Science in
            Computer Science from <span className="text-blue-400">Agurchand Manmull Jain College</span> with 75%. 
            {isExpanded && (
              <span className="inline">
                {" "}My short-term goal is to get placed in a reputable company where I can apply my skills and continue learning. 
                My long-term goal is to become a proficient developer who solves real-time problems for clients and makes a meaningful impact in the tech industry.
              </span>
            )}
          </p>
        </div>

        {/* Interests/Hobbies */}
        <div className="my-8 animate-fadeInUp animation-delay-600">
          <h4 className="text-[1.8rem] font-semibold mb-4 text-gray-300">My Interests</h4>
          <div className="flex gap-4 flex-wrap">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="group relative px-6 py-3 bg-gradient-to-br from-accent/10 to-transparent border border-accent/30 rounded-full hover:border-accent/60 transition-all duration-300 cursor-default overflow-hidden"
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${interest.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></span>
                <span className="relative flex items-center gap-2 text-[1.4rem] font-medium">
                  <i className={`fas ${interest.icon} text-accent group-hover:scale-125 transition-transform duration-300`}></i>
                  {interest.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative inline-block bg-gradient-to-r from-accent to-blue-500 rounded-[4rem] px-11 py-4 tracking-wider text-[1.6rem] text-white font-semibold transition-all duration-500 hover:shadow-[0_0_2rem_#0ef,0_0_4rem_#0ef] hover:scale-105 mt-6 overflow-hidden animate-fadeInUp animation-delay-700"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative z-10 flex items-center gap-2">
            {isExpanded ? 'Show Less' : 'Read More'}
            <i className={`fa-solid fa-arrow-${isExpanded ? 'up' : 'down'} group-hover:translate-y-1 transition-transform duration-300`}></i>
          </span>
        </button>

        {/* Alternative: Download Resume */}
        <a 
          href="/assets/Ashwin's__Resume.pdf"
          download="Ashwin-Resume"
          className="group relative inline-block bg-transparent border-2 border-accent rounded-[4rem] px-11 py-4 tracking-wider text-[1.6rem] text-accent font-semibold transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:shadow-[0_0_2rem_#0ef] hover:scale-105 ml-4 overflow-hidden animate-fadeInUp animation-delay-800 max-md:ml-0 max-md:mt-4"
        >
          <span className="relative z-10 flex items-center gap-2">
            <i className="fa-solid fa-file-pdf"></i>
            Resume
            <i className="fa-solid fa-download group-hover:translate-y-1 transition-transform duration-300"></i>
          </span>
        </a>
      </div>
    </section>
  );
};

export default About;