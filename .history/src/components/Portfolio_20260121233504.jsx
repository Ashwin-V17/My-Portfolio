import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    // Mobile Apps - Featured Projects
    {
      image: "https://veebuilds.com/assets/images/vee-logo.png",
      title: "Vee Build Ecosystem",
      category: "mobile",
      description:
        "Comprehensive construction materials marketplace with professional hiring and land buying features. Dual platform supporting complete construction ecosystem with separate customer and vendor applications.",
      technologies: [
        "React Native",
        "Java",
        "PHP",
        "MySQL",
        "Firebase",
        "Razorpay",
      ],
      links: [
        {
          type: "customer",
          playStore:
            "https://play.google.com/store/apps/details?id=com.construvtions.veeconstructions", // Customer app
          appStore: "https://apps.apple.com/in/app/vee-builds/id6754379231",
          label: "Customer App",
        },
        {
          type: "vendor",
          playStore:
            "https://play.google.com/store/apps/details?id=com.construvtions.veeconstructions.vendor", // Vendor app
          appStore:
            "https://apps.apple.com/in/app/veebuild-business/id6753942254",
          label: "Vendor App",
        },
      ],
      featured: true,
      type: "Construction Platform",
      isDualPlatform: true,
    },
    {
      image: "https://meduora.in/assets/images/new/med.png",
      title: "Meduora Healthcare Ecosystem",
      category: "mobile",
      description:
        "Doctor, lab, and pharmacy booking platform with real-time chat functionality and secure JWT authentication. Separate apps for customers and healthcare service vendors with order processing system.",
      technologies: [
        "React Native",
        "Expo",
        "Laravel Lumen",
        "MySQL",
        "JWT",
        "Firebase",
      ],
      links: [
        {
          type: "customer",
          playStore:
            "https://play.google.com/store/apps/details?id=com.app.meduora", // Customer app
          appStore: "https://apps.apple.com/in/app/meduora/id6753971605",
          label: "Customer App",
        },
        {
          type: "vendor",
          playStore:
            "https://play.google.com/store/apps/details?id=com.app.meduorahealthhcare", // Vendor app
          appStore: "https://apps.apple.com/in/app/meduora-vendor/id6753979887",
          label: "Vendor App",
        },
      ],
      featured: true,
      type: "Healthcare Platform",
      isDualPlatform: true,
    },
    {
      image: "https://accsysindia.in/live_old/assets/images/alog.png",
      title: "Accsys India",
      category: "mobile",
      description:
        "E-commerce platform with integrated network marketing features enabling product sales and distributor management. Successfully integrated payment gateway and multi-level marketing features.",
      technologies: ["Java", "Android", "PHP", "MySQL", "Razorpay"],
      link: "https://play.google.com/store/apps/details?id=accsysindia.india.com",

      github: null,
      featured: true,
      type: "E-commerce & MLM",
    },
    {
      image: "https://agsk.in/asset/images/AGSKKK.png",
      title: "AGSK - Banana Leaf Marketplace",
      category: "mobile",
      description:
        "Innovative banana leaf selling app with three distinct user roles: customers, hotels, and catering services. Seamless ordering experience with integrated payment processing.",
      technologies: ["React Native", "Expo", "CodeIgniter 4", "Razorpay"],
      link: "https://play.google.com/store/apps/details?id=com.app.Agsk&hl=en_IN",
      appStore: "https://apps.apple.com/in/app/agsk/id6755430027",
      github: null,
      featured: false,
      type: "Marketplace",
    },
    // Web Projects
    {
      image: `${import.meta.env.BASE_URL}assets/images/snow_dawn/CourseHeroes_HomePage.png`,
      title: "Course Heroes Platform",
      category: "web",
      description:
        "Educational platform connecting students with tutors, featuring course management, video streaming, and comprehensive learning tools.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express"],
      link: "#",
      github: "#",
      featured: false,
      type: "Education",
    },
    {
      image: "/assets/Screenshot 2024-09-23 141554.png",
      title: "Student Management System",
      category: "web",
      description:
        "Comprehensive CRUD application for managing student records with authentication, role-based access, and efficient data management using MERN stack.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://sdms-crud-frontend.onrender.com",
      github: "#",
      featured: true,
      type: "Management System",
    },
    {
      image: "/assets/snow_dawn/Screenshot 2024-03-16 101307.png",
      title: "E-Commerce Dashboard",
      category: "web",
      description:
        "Admin dashboard for managing products, orders, and analytics with real-time data visualization and comprehensive reporting features.",
      technologies: ["React.js", "Laravel", "MySQL", "Chart.js"],
      link: "#",
      github: "#",
      featured: false,
      type: "Dashboard",
    },
    {
      image: "/assets/snow_dawn/Screenshot 2024-09-25 002228.png",
      title: "Portfolio Website",
      category: "web",
      description:
        "Modern portfolio website with smooth animations, responsive design, and interactive UI elements showcasing projects and skills.",
      technologies: ["React.js", "Tailwind CSS", "Vite"],
      link: "#",
      github: "#",
      featured: false,
      type: "Portfolio",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: "fa-layer-group" },
    {
      id: "mobile",
      label: "Mobile Apps",
      icon: "fa-mobile-screen-button",
      count: 4,
    },
    { id: "web", label: "Web Apps", icon: "fa-globe", count: 4 },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const stats = [
    { number: "8+", label: "Apps Published", icon: "fa-mobile" },
    { number: "10+", label: "Projects Completed", icon: "fa-code" },
    { number: "100%", label: "Client Satisfaction", icon: "fa-smile" },
  ];

  return (
    <section
      className="relative min-h-screen pt-[10rem] pr-[9%] pb-8 pl-[9%] bg-bg-secondary max-md:pt-[10rem] max-md:px-[3%] max-md:pb-28 overflow-hidden"
      id="portfolio"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-12 max-md:mb-8 relative z-10">
        <div className="mb-4 animate-fadeInUp">
          <span className="text-[1.4rem] text-accent font-semibold tracking-wider uppercase opacity-80">
            My Work
          </span>
        </div>
        <h2 className="text-[4.5rem] font-bold mb-4 max-md:text-[3.5rem] animate-fadeInUp animation-delay-200">
          Featured{" "}
          <span className="text-accent bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-[1.6rem] text-gray-400 max-w-[700px] mx-auto mb-8 animate-fadeInUp animation-delay-300 max-md:text-[1.4rem]">
          Building production-ready applications from healthcare to
          construction, with 8+ apps live on Play Store & App Store
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-8 flex-wrap animate-fadeInUp animation-delay-400">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center gap-2 justify-center mb-2">
                <i
                  className={`fa-solid ${stat.icon} text-accent text-[2rem]`}
                ></i>
                <span className="text-[3rem] font-bold text-accent max-md:text-[2.5rem]">
                  {stat.number}
                </span>
              </div>
              <p className="text-[1.4rem] text-gray-400 max-md:text-[1.2rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap relative z-10 animate-fadeInUp animation-delay-500">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`group relative px-8 py-4 rounded-full font-semibold text-[1.6rem] transition-all duration-300 overflow-hidden max-md:px-6 max-md:py-3 max-md:text-[1.4rem] ${
              activeFilter === filter.id
                ? "text-white"
                : "text-gray-400 hover:text-accent"
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
              {filter.count && (
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-[1.2rem] ${
                    activeFilter === filter.id
                      ? "bg-white/20"
                      : "bg-accent/20 text-accent"
                  }`}
                >
                  {filter.count}
                </span>
              )}
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
            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
          >
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-accent to-blue-500 text-white px-4 py-2 rounded-full text-[1.2rem] font-semibold flex items-center gap-2 shadow-lg">
                <i className="fa-solid fa-star"></i>
                Featured
              </div>
            )}

            {/* Type Badge */}
            <div className="absolute top-4 left-4 z-20 bg-bg-primary/90 backdrop-blur-sm border border-accent/30 text-accent px-4 py-2 rounded-full text-[1.2rem] font-semibold">
              {project.type}
            </div>

            {/* Image */}
            <div className="relative overflow-hidden h-[300px] max-md:h-[250px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Dual Platform Badge */}
            {project.isDualPlatform && (
              <div className="absolute top-20 right-4 z-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-[1.2rem] font-semibold flex items-center gap-2 shadow-lg">
                <i className="fa-solid fa-layer-group"></i>
                Dual Platform
              </div>
            )}
            {/* Content */}
            <div className="p-8 max-md:p-6">
              <h3 className="text-[2.4rem] font-bold mb-3 group-hover:text-accent transition-colors duration-300 max-md:text-[2rem]">
                {project.title}
              </h3>

              <p className="text-[1.5rem] text-gray-400 mb-6 leading-relaxed max-md:text-[1.3rem]">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[1.2rem] text-accent font-medium hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                {project.isDualPlatform ? (
                  // Dual Platform (Customer + Vendor Apps)
                  project.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="space-y-2">
                      <p className="text-[1.3rem] text-gray-400 font-semibold flex items-center gap-2">
                        <i
                          className={`fa-solid ${link.type === "customer" ? "fa-user" : "fa-store"}`}
                        ></i>
                        {link.label}
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        <a
                          href={link.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-blue-500 text-white px-6 py-3 rounded-full font-semibold text-[1.4rem] hover:shadow-[0_0_2rem_rgba(14,239,255,0.5)] transition-all duration-300 hover:scale-105 max-md:text-[1.2rem]"
                        >
                          <i className="fa-brands fa-google-play"></i>
                          Play Store
                          <i className="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                        </a>

                        <a
                          href={link.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold text-[1.4rem] hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 max-md:text-[1.2rem]"
                        >
                          <i className="fa-brands fa-apple"></i>
                          App Store
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  // Single Platform Apps
                  <div className="flex gap-3 flex-wrap">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-blue-500 text-white px-6 py-3 rounded-full font-semibold text-[1.4rem] hover:shadow-[0_0_2rem_rgba(14,239,255,0.5)] transition-all duration-300 hover:scale-105 max-md:text-[1.2rem]"
                      >
                        <i
                          className={`fa-brands ${project.category === "mobile" ? "fa-google-play" : "fa-chrome"}`}
                        ></i>
                        {project.category === "mobile"
                          ? "Play Store"
                          : "Live Demo"}
                        <i className="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                      </a>
                    )}

                    {project.appStore && (
                      <a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold text-[1.4rem] hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 max-md:text-[1.2rem]"
                      >
                        <i className="fa-brands fa-apple"></i>
                        App Store
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center gap-2 bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold text-[1.4rem] hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 max-md:text-[1.2rem]"
                      >
                        <i className="fa-brands fa-github"></i>
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Section */}
      <div className="text-center mt-16 relative z-10 animate-fadeInUp animation-delay-1000">
        <p className="text-[1.8rem] text-gray-300 mb-6 max-md:text-[1.6rem]">
          Interested in working together?
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/Ashwin-V17"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block bg-transparent border-2 border-accent rounded-[4rem] px-11 py-4 tracking-wider text-[1.6rem] text-accent font-semibold transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:shadow-[0_0_2rem_#0ef] hover:scale-105 overflow-hidden max-md:text-[1.4rem] max-md:px-8 max-md:py-3"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <i className="fa-brands fa-github text-[2rem]"></i>
              GitHub Profile
              <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
            </span>
          </a>
          <a
            href="#contact"
            className="group relative inline-block bg-gradient-to-r from-accent to-blue-500 rounded-[4rem] px-11 py-4 tracking-wider text-[1.6rem] text-white font-semibold transition-all duration-500 hover:shadow-[0_0_2rem_#0ef,0_0_4rem_#0ef] hover:scale-105 overflow-hidden max-md:text-[1.4rem] max-md:px-8 max-md:py-3"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <i className="fa-solid fa-envelope"></i>
              Let's Connect
              <i className="fa-solid fa-paper-plane group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
