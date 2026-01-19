import { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '8+', label: 'Apps Published' },
    { number: '10+', label: 'Technologies' },
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
      <div className="about-img relative w-full max-w-[500px] flex items-center justify-center max-md:mt-16 animate-fadeInLeft group">
        {/* Decorative circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] max-md:w-[300px] max-md:h-[300px] border-2 border-accent/20 rounded-full animate-spin-slow"></div>
          <div className="absolute w-[350px] h-[350px] max-md:w-[250px] max-md:h-[250px] border-2 border-dashed border-blue-500/20 rounded-full animate-spin-reverse"></div>
        </div>

        {/* Glowing effect behind image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] max-md:w-[300px] max-md:h-[300px] rounded-full bg-gradient-to-br from-accent/20 via-blue-500/20 to-purple-500/20 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
        </div>

        <img 
          src="/assets/Ashwin__1_-ai-brush-removebg-1jov1bs.png" 
          alt="Ashwin" 
          className="relative z-10 h-auto w-full max-w-[400px] object-contain max-md:max-w-[300px] filter drop-shadow-[0_0_2rem_rgba(14,239,255,0.3)] group-hover:drop-shadow-[0_0_3rem_rgba(14,239,255,0.5)] group-hover:scale-105 transition-all duration-700"
        />

        {/* Floating badges - More technologies */}
        <div className="absolute top-5 -left-8 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-2xl px-4 py-2 animate-float max-md:hidden">
          <span className="text-accent font-bold text-sm">📱 React Native</span>
        </div>
        <div className="absolute top-20 -right-8 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-4 py-2 animate-float animation-delay-300 max-md:hidden">
          <span className="text-blue-400 font-bold text-sm">⚛️ React.js</span>
        </div>
        <div className="absolute top-2 -right-10 bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-2xl px-4 py-2 animate-float animation-delay-500 max-md:hidden">
          <span className="text-green-400 font-bold text-sm">🟢 Node.js</span>
        </div>
        <div className="absolute bottom-14 -right-10 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-4 py-2 animate-float animation-delay-700 max-md:hidden">
          <span className="text-purple-400 font-bold text-sm">🐘 PHP</span>
        </div>
        <div className="absolute top-1/2 -left-12 bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-2xl px-4 py-2 animate-float animation-delay-900 max-md:hidden">
          <span className="text-red-400 font-bold text-sm">🔺 Laravel</span>
        </div>
        <div className="absolute top-1/3 -right-12 bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 rounded-2xl px-4 py-2 animate-float animation-delay-1100 max-md:hidden">
          <span className="text-orange-400 font-bold text-sm">☕ Java</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content flex-1 max-w-[700px] z-10 animate-fadeInRight">
        {/* Section badge */}
        <div className="mb-6 animate-fadeInUp">
          <span className="text-[1.4rem] text-accent font-semibold tracking-wider uppercase opacity-80 border-l-4 border-accent pl-4">
            Get to know me
          </span>
        </div>

        <h2 className="text-left text-[4.5rem] font-bold leading-[1.2] mb-2 max-md:text-[3.5rem] animate-fadeInUp animation-delay-200">
          About <span className="text-accent bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">Me</span>
        </h2>
        
        <h3 className="text-[2.6rem] font-bold mb-8 max-md:text-[2rem] animate-fadeInUp animation-delay-300 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Full Stack & Mobile Developer
        </h3>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8 animate-fadeInUp animation-delay-400">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-2xl p-4 text-center hover:border-accent/40 hover:scale-105 transition-all duration-300 group"
            >
              <h4 className="text-[2.5rem] font-bold text-accent group-hover:scale-110 transition-transform duration-300 max-md:text-[2rem]">
                {stat.number}
              </h4>
              <p className="text-[1.2rem] text-gray-400 max-md:text-[1rem]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="animate-fadeInUp animation-delay-500 mb-8">
          <p className="text-[1.6rem] leading-relaxed text-gray-300 mb-4 max-md:text-[1.4rem]">
            Full Stack and Mobile Application Developer with <span className="text-accent font-semibold">1+ year of hands-on experience</span> in building cross-platform applications using <span className="text-blue-400 font-semibold">React Native (Expo)</span>, <span className="text-orange-400 font-semibold">Native Android (Java + XML)</span>, <span className="text-green-400 font-semibold">Node.js</span>, and <span className="text-red-400 font-semibold">Laravel</span>.
          </p>
          <p className="text-[1.6rem] leading-relaxed text-gray-300 max-md:text-[1.4rem]">
            Skilled in backend API development, authentication, and database architecture. Published <span className="text-accent font-semibold">8+ production apps</span> on the Play Store and App Store.
          </p>
          {isExpanded && (
            <p className="text-[1.6rem] leading-relaxed text-gray-300 mt-4 max-md:text-[1.4rem]">
              Passionate about delivering scalable, high-quality, and user-centric solutions with end-to-end project ownership. I graduated with a Bachelor of Science in Computer Science from <span className="text-blue-400">Agurchand Manmull Jain College</span> with 75%.
            </p>
          )}
        </div>

        {/* Interests/Hobbies */}
        <div className="mb-8 animate-fadeInUp animation-delay-600">
          <h4 className="text-[1.8rem] font-semibold mb-4 text-gray-300">My Interests</h4>
          <div className="flex gap-4 flex-wrap">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="group relative px-6 py-3 bg-gradient-to-br from-accent/10 to-transparent border border-accent/30 rounded-full hover:border-accent/60 transition-all duration-300 cursor-default overflow-hidden"
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${interest.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></span>
                <span className="relative flex items-center gap-2 text-[1.4rem] font-medium max-md:text-[1.2rem]">
                  <i className={`fas ${interest.icon} text-accent group-hover:scale-125 transition-transform duration-300`}></i>
                  {interest.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap items-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative inline-block bg-gradient-to-r from-accent to-blue-500 rounded-[4rem] px-11 py-4 tracking-wider text-[1.6rem] text-white font-semibold transition-all duration-500 hover:shadow-[0_0_2rem_#0ef,0_0_4rem_#0ef] hover:scale-105 overflow-hidden animate-fadeInUp animation-delay-700 max-md:text-[1.4rem] max-md:px-8 max-md:py-3"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10 flex items-center gap-2">
              {isExpanded ? 'Show Less' : 'Read More'}
              <i className={`fa-solid fa-arrow-${isExpanded ? 'up' : 'down'} group-hover:translate-y-1 transition-transform duration-300`}></i>
            </span>
          </button>

          <a 
            href="/assets/Ashwin's__Resume.pdf"
            download="Ashwin-Resume"
            className="group relative inline-block bg-transparent border-2 border-accent rounded-[4rem] px-11 py-4 tracking-wider text-[1.6rem] text-accent font-semibold transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:shadow-[0_0_2rem_#0ef] hover:scale-105 overflow-hidden animate-fadeInUp animation-delay-800 max-md:text-[1.4rem] max-md:px-8 max-md:py-3"
          >
            <span className="relative z-10 flex items-center gap-2">
              <i className="fa-solid fa-file-pdf"></i>
              Resume
              <i className="fa-solid fa-download group-hover:translate-y-1 transition-transform duration-300"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;