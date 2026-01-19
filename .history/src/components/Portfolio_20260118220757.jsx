import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    // Mobile Apps
    {
      image: "/assets/mobile-app-1.png", // Replace with actual app screenshots
      title: "E-Commerce Mobile App",
      category: "mobile",
      description: "Cross-platform shopping app built with React Native (Expo) featuring product catalog, cart management, and secure payment integration.",
      technologies: ["React Native", "Expo", "Node.js", "MongoDB"],
      link: "https://play.google.com/store", // Add your actual Play Store link
      appStore: "https://apps.apple.com/", // Add your actual App Store link
      github: "#",
      featured: true
    },
    {
      image: "/assets/mobile-app-2.png",
      title: "Food Delivery App",
      category: "mobile",
      description: "Native Android app for food ordering with real-time tracking, push notifications, and seamless checkout experience.",
      technologies: ["Java", "Android", "Firebase", "Google Maps"],
      link: "https://play.google.com/store",
      github: "#",
      featured: true
    },
    {
      image: "/assets/mobile-app-3.png",
      title: "Fitness Tracker App",
      category: "mobile",
      description: "React Native fitness application with workout tracking, progress analytics, and social features for motivation.",
      technologies: ["React Native", "Expo", "Redux", "Charts"],
      link: "https://play.google.com/store",
      appStore: "https://apps.apple.com/",
      github: "#",
      featured: false
    },
    {
      image: "/assets/mobile-app-4.png",
      title: "Task Management App",
      category: "mobile",
      description: "Productivity app with task scheduling, reminders, and team collaboration features built with React Native.",
      technologies: ["React Native", "Expo", "SQLite", "Push Notifications"],
      link: "https://play.google.com/store",
      github: "#",
      featured: false
    },
    // Web Projects
    {
      image: "/assets/snow_dawn/CourseHeroes_HomePage.png",
      title: "Course Heroes Platform",
      category: "web",
      description: "Educational platform connecting students with tutors, featuring course management, video streaming, and payment processing.",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
      featured: true
    },
    {
      image: "/assets/Screenshot 2024-09-23 141554.png",
      title: "Student Management System",
      category: "web",
      description: "Comprehensive CRUD application for managing student records with authentication, role-based access, and data export features.",
      technologies: ["MERN Stack", "JWT", "Redux", "Bootstrap"],
      link: "https://sdms-crud-frontend.onrender.com",
      github: "#",
      featured: true
    },
    {
      image: "/assets/snow_dawn/Screenshot 2024-03-16 101307.png",
      title: "E-Commerce Dashboard",
      category: "web",
      description: "Admin dashboard for managing products, orders, and analytics with real-time data visualization and reporting.",
      technologies: ["React.js", "Laravel", "MySQL", "Chart.js"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      image: "/assets/snow_dawn/Screenshot 2024-09-25 002228.png",
      title: "Portfolio Website",
      category: "web",
      description: "Modern portfolio website with smooth animations, responsive design, and contact form integration.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      link: "#",
      github: "#",
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: 'fa-layer-group' },
    { id: 'mobile', label: 'Mobile Apps', icon: 'fa-mobile-screen-button' },
    { id: 'web', label: 'Web Apps', icon: 'fa-globe' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="relative min-h-screen pt-[10rem] pr-[9%] pb-8 pl-[9%] bg-bg-secondary max-md:pt-[10rem] max-md:px-[3%] max-md:pb-28 overflow-hidden" id="portfolio">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 max-md:mb-12 relative z-10">
        <div className="mb-4 animate-fadeInUp">
          <span className="text-[1.4rem] text-accent font-semibold tracking-wider uppercase opacity-80">
            My Work
          </span>
        </div>
        <h2 className="text-[4.5rem] font-bold mb-4 max-md:text-[3.5rem] animate-fadeInUp animation-delay-200">
          Featured <span className="text-accent bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-[1.6rem] text-gray-400 max-w-[600px] mx-auto animate-fadeInUp animation-delay-300">
          8+ mobile apps published on Play Store & App Store, plus scalable web applications
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap relative z-10 animate-fadeInUp animation-delay-400">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`group relative px-8 py-4 rounded-full font-semibold text-[1.6rem] transition-all duration-300 overflow-hidden max-md:px-6 max-md:py-3 max-md:text-[1.4rem] ${
              activeFilter === filter.id
                ? 'text-white'
                : 'text-gray-400 hover:text-accent'
            }`}
          >
            {/* Background */}
            {activeFilter === filter.id ? (
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 animate-fadeIn"></span>
            ) : (
              <span className="absolute inset-0 bg-accent/10 border border-accent/30 group-hover:border-accent/50 transition-all duration-300"></span>
            )}
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
              <i className={`fa-solid ${filter.icon}`}></i>
              {filter.label}
            </span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 items-start gap-8 relative z-10 max-lg:grid-cols-2 max-md:grid-cols-1">
        {filteredProjects.map((project, index) => (
          <div 
            key={index}
            className="group relative rounded-[2rem] overflow-hidden bg-bg-primary border-2 border-bg-primary hover:border-accent transition-all duration-500 hover:shadow-[0_0_3rem_rgba(14,239,255,0.2)] hover:scale-[1.02] animate-fadeInUp"
            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
          >
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-accent to-blue-500 text-white px-4 py-2 rounded-full text-[1.2rem] font-semibold flex items-center gap-2 shadow-lg">
                <i className="fa-solid fa-star"></i>
                Featured
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-20 bg-bg-primary/80 backdrop-blur-sm border border-accent/30 text-accent px-4 py-2 rounded-full text-[1.2rem] font-semibold">
              <i className={`fa-solid ${project.category === 'mobile' ? 'fa-mobile-screen-button' : 'fa-globe'} mr-2`}></i>
              {project.category === 'mobile' ? 'Mobile App' : 'Web App'}
            </div>

            {/* Image */}
            <div className="relative overflow-hidden h-[300px]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Content */}
            <div className="p-8 max-md:p-6">
              <h3 className="text-[2.4rem] font-bold mb-3 group-hover:text-accent transition-colors duration-300 max-md:text-[2rem]">
                {project.title}
              </h3>
              
              <p className="text-[1.5rem] text-gray-400 mb-6 leading-relaxed line-clamp-3 max-md:text-[1.3rem]">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[1.2rem] text-accent font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 flex-wrap">
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex-1 min-w-[120px] flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-blue-500 text-white px-6 py-3 rounded-full font-semibold text-[1.4rem] hover:shadow-[0_0_2rem_rgba(14,239,255,0.5)] transition-all duration-300 hover:scale-105"
                  >
                    <i className={`fa-brands ${project.category === 'mobile' ? 'fa-google-play' : 'fa-chrome'}`}></i>
                    {project.category === 'mobile' ? 'Play Store' : 'Live Demo'}
                    <i className="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                  </a>
                )}
                
                {project.appStore && (
                  <a 
                    href={project.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex-1 min-w-[120px] flex items-center justify-center gap-2 bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold text-[1.4rem] hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <i className="fa-brands fa-apple"></i>
                    App Store
                  </a>
                )}
                
                {project.github && !project.appStore && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center gap-2 bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold text-[1.4rem] hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <i className="fa-brands fa-github"></i>
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Section */}
      <div className="text-center mt-16 relative z-10 animate-fadeInUp animation-delay-1000">
        <p className="text-[1.8rem] text-gray-300 mb-6 max-md:text-[1.6rem]">
          Want to see more of my work?
        </p>
        <a 
          href="https://github.com/Ashwin-V17"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block bg-transparent border-2 border-accent rounded-[4rem] px-11 py-4 tracking-wider text-[1.6rem] text-accent font-semibold transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:shadow-[0_0_2rem_#0ef] hover:scale-105 overflow-hidden max-md:text-[1.4rem] max-md:px-8 max-md:py-3"
        >
          <span className="relative z-10 flex items-center gap-2 justify-center">
            <i className="fa-brands fa-github text-[2rem]"></i>
            View GitHub Profile
            <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;