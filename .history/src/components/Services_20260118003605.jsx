import { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "Mobile App Development",
      description: "Expert in building cross-platform mobile applications using React Native (Expo) and Native Android (Java). Published 8+ production apps on Play Store and App Store with focus on performance and user experience.",
      color: "from-accent to-blue-500",
      bgGlow: "bg-accent/5",
      technologies: ["React Native", "Expo", "Java", "Android"],
      projects: "8+ Apps Published"
    },
    {
      icon: "fa-solid fa-code",
      title: "Full Stack Development",
      description: "End-to-end web application development with React.js frontend and Node.js/Laravel backend. Specializing in RESTful APIs, authentication systems, and scalable database architecture.",
      color: "from-blue-500 to-purple-500",
      bgGlow: "bg-blue-500/5",
      technologies: ["React.js", "Node.js", "Laravel", "PHP"],
      projects: "10+ Projects"
    },
    {
      icon: "fa-solid fa-server",
      title: "Backend Development",
      description: "Robust backend solutions with Node.js and Laravel. Expert in API development, database design, authentication, authorization, and building scalable server-side applications.",
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/5",
      technologies: ["Node.js", "Express", "Laravel", "MySQL"],
      projects: "API Integration"
    }
  ];

  return (
    <section className="relative min-h-screen pt-[10rem] pr-[9%] pb-8 pl-[9%] max-md:pt-[10rem] max-md:px-[3%] max-md:pb-28 overflow-hidden" id="services">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-20 max-md:mb-12 relative z-10">
        <div className="mb-4 animate-fadeInUp">
          <span className="text-[1.4rem] text-accent font-semibold tracking-wider uppercase opacity-80">
            What I Offer
          </span>
        </div>
        <h2 className="text-[4.5rem] font-bold mb-4 max-md:text-[3.5rem] animate-fadeInUp animation-delay-200">
          My <span className="text-accent bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-[1.6rem] text-gray-400 max-w-[600px] mx-auto animate-fadeInUp animation-delay-300">
          Delivering high-quality, scalable solutions with 1+ year of hands-on experience
        </p>
      </div>

      {/* Services Grid */}
      <div className="flex items-stretch justify-center flex-wrap gap-8 relative z-10">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group flex-1 basis-[30rem] max-w-[400px] bg-bg-secondary px-8 pt-12 pb-16 rounded-[2rem] border-2 border-bg-primary transition-all duration-500 hover:border-accent hover:scale-105 hover:shadow-[0_0_3rem_rgba(14,239,255,0.2)] relative overflow-hidden animate-fadeInUp"
            style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            {/* Glowing Effect */}
            <div className={`absolute -top-20 -right-20 w-40 h-40 ${service.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            {/* Icon */}
            <div className="relative mb-6">
              <div className={`absolute inset-0 flex items-center justify-center blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}>
                <i className={`${service.icon} text-[7rem] text-accent`}></i>
              </div>
              <i className={`${service.icon} text-[7rem] text-accent relative z-10 group-hover:scale-110 transition-transform duration-500 inline-block`}></i>
            </div>

            {/* Title */}
            <h3 className="text-[2.6rem] font-bold mb-4 max-md:text-[2.2rem] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-accent group-hover:to-blue-400 transition-all duration-500">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[1.6rem] mb-6 leading-relaxed text-gray-300 max-md:text-[1.4rem]">
              {service.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {service.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-[1.2rem] text-accent font-medium group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Count Badge */}
            <div className="mb-6 flex items-center justify-center gap-2">
              <i className="fa-solid fa-check-circle text-accent text-[1.4rem]"></i>
              <span className="text-[1.4rem] font-semibold text-gray-400">{service.projects}</span>
            </div>

            {/* CTA Button */}
            <a 
              href="#contact" 
              className="group/btn relative inline-block bg-gradient-to-r from-accent to-blue-500 rounded-[4rem] px-11 py-4 tracking-wider text-[1.6rem] text-white font-semibold transition-all duration-500 hover:shadow-[0_0_2rem_#0ef,0_0_4rem_#0ef] hover:scale-105 overflow-hidden max-md:text-[1.4rem] max-md:px-8 max-md:py-3"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Get Started
                <i className="fa-solid fa-arrow-right group-hover/btn:translate-x-2 transition-transform duration-300"></i>
              </span>
            </a>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${service.color} transform rotate-45 translate-x-10 -translate-y-10`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      {/* <div className="text-center mt-20 relative z-10 animate-fadeInUp animation-delay-1000">
        <p className="text-[1.8rem] text-gray-300 mb-6 max-md:text-[1.6rem]">
          Ready to bring your project to life?
        </p>
        <a 
          href="#contact"
          className="group relative inline-block bg-transparent border-2 border-accent rounded-[4rem] px-11 py-4 tracking-wider text-[1.6rem] text-accent font-semibold transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:shadow-[0_0_2rem_#0ef] hover:scale-105 overflow-hidden max-md:text-[1.4rem] max-md:px-8 max-md:py-3"
        >
          <span className="relative z-10 flex items-center gap-2 justify-center">
            <i className="fa-solid fa-envelope"></i>
            Contact Me
            <i className="fa-solid fa-paper-plane group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300"></i>
          </span>
        </a>
      </div>
    </section> */}
  );
};

export default Services;