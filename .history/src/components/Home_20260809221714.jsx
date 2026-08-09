import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const Home = () => {
  const typedElement = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Full Stack & Mobile Developer",
        "React Native Developer",
        "Full Stack Developer",
        "Application Developer",
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1500,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socials = [
    {
      href: "https://www.facebook.com/ashwin.V.17",
      icon: "fa-facebook",
      title: "Facebook",
      hoverBorder: "hover:border-blue-500",
      hoverGrad: "from-blue-600 to-blue-400",
    },
    {
      href: "https://www.instagram.com/ashwin____17/",
      icon: "fa-instagram",
      title: "Instagram",
      hoverBorder: "hover:border-pink-500",
      hoverGrad: "from-pink-500 via-purple-500 to-orange-400",
    },
    {
      href: "https://www.linkedin.com/in/ashwin-vilson-455b75245/",
      icon: "fa-linkedin",
      title: "LinkedIn",
      hoverBorder: "hover:border-blue-600",
      hoverGrad: "from-blue-700 to-blue-400",
    },
    {
      href: "https://github.com/Ashwin-V17",
      icon: "fa-github",
      title: "GitHub",
      hoverBorder: "hover:border-gray-400",
      hoverGrad: "from-gray-700 to-gray-500",
    },
  ];

  return (
    <section
      className="relative min-h-screen min-w-full flex justify-between items-center gap-8 max-md:flex-col overflow-hidden"
      id="home"
      style={{
        paddingTop: "10rem",
        paddingBottom: "6rem",
        paddingLeft: "9%",
        paddingRight: "9%",
      }}
    >
      {/*  mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--accent-rgb),0.2) 0%, transparent 70%)",
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            transition: "transform 0.8s ease-out",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            transition: "transform 0.8s ease-out",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${4 + i * 2}px`,
              height: `${4 + i * 2}px`,
              background:
                i % 2 === 0 ? "var(--accent)" : "rgba(59,130,246,0.6)",
              top: `${15 + i * 12}%`,
              left: `${10 + i * 13}%`,
              opacity: 0.3 + i * 0.05,
              animationDelay: `${i * 0.4}s`,
              transform: `translate(${mousePosition.x * (0.01 + i * 0.003)}px, ${mousePosition.y * (0.01 + i * 0.003)}px)`,
              transition: "transform 0.6s ease-out",
            }}
          />
        ))}
      </div>

      {/* Left: Content */}
      <div className="home-content z-10 flex-1 animate-fadeInLeft">
        {/* Eyebrow label */}
        <div className="mb-6 animate-fadeInUp flex items-center gap-3">
          <span
            className="inline-block w-8 h-[2px]"
            style={{ background: "var(--accent)" }}
          />
          <span
            className="text-[1.5rem] font-bold tracking-[0.25em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Welcome to my portfolio
          </span>
        </div>

        {/* Name block */}
        <div className="mb-2 animate-fadeInUp">
          <p className="text-[2.2rem] font-medium text-gray-400 max-md:text-[1.8rem]">
            Hello, It's Me
          </p>
          <h1 className="text-[6.4rem] font-black leading-[1.05] max-md:text-[5rem] relative inline-block text-accent">
            Ashwin
            <span className="absolute -top-3 -right-8 text-[3rem] animate-wave">
              👋
            </span>
            {/* Accent underline */}
            <span
              className="absolute -bottom-1 left-0 h-1 w-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent), transparent)",
              }}
            />
          </h1>
        </div>

        {/* Typed role */}
        <h2
          className="text-[2.8rem] font-semibold mb-6 max-md:text-[2.4rem] animate-fadeInUp animation-delay-400"
          style={{ color: "var(--text-primary)" }}
        >
          I'm a&nbsp;
          <span
            ref={typedElement}
            className="font-bold"
            style={{ color: "var(--accent)" }}
          />
        </h2>

        {/* Bio */}
        <p
          className="text-[1.6rem] max-w-[540px] leading-[1.8] text-gray-400 animate-fadeInUp animation-delay-600 border-l-2 pl-4 mb-8"
          style={{ borderColor: "var(--accent)" }}
        >
          Enthusiastic and motivated Full Stack Developer with a strong
          foundation in Core Java fundamentals and MERN Stack development.
        </p>

        {/* Skill chips */}
        <div className="flex flex-wrap gap-2 mb-10 animate-fadeInUp animation-delay-700">
          {[
            "React",
            "React Native",
            "Node.js",
            "Java",
            "MongoDB",
            "Express",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-[6px] rounded-full text-[1.3rem] font-semibold border hover:scale-105 transition-all duration-300 cursor-default"
              style={{
                borderColor: "rgba(var(--accent-rgb),0.4)",
                color: "var(--accent)",
                background: "rgba(var(--accent-rgb),0.07)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA row: socials + button */}
        <div className="flex items-center gap-6 flex-wrap animate-fadeInUp animation-delay-800">
          {/* Social icons */}
          <div className="flex gap-3">
            {socials.map(({ href, icon, title, hoverBorder, hoverGrad }) => (
              <a
                key={title}
                href={href}
                title={title}
                className={`group relative inline-flex justify-center items-center w-14 h-14 border-2 border-accent rounded-full text-[1.8rem] text-accent transition-all duration-400 ${hoverBorder} hover:rotate-6 overflow-hidden`}
                style={{ background: "rgba(var(--accent-rgb),0.05)" }}
              >
                <span
                  className={`absolute inset-0 bg-gradient-to-br ${hoverGrad} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
                />
                <i
                  className={`fa-brands ${icon} relative z-10 group-hover:text-white group-hover:scale-110 transition-all duration-300`}
                />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-10 bg-gray-700 hidden sm:block" />

          {/* Download CV */}
          <a
            href={`${import.meta.env.BASE_URL}assets/Ashwin-Resume.pdf`}
            download="Ashwin-Resume"
            className="group relative inline-flex items-center gap-3 rounded-full px-8 py-[14px] text-[1.6rem] font-bold text-white overflow-hidden transition-all duration-400 hover:scale-105 hover:shadow-[0_0_2.5rem_rgba(var(--accent-rgb),0.5)]"
            style={{
              background: "linear-gradient(135deg, var(--accent), #3b82f6)",
            }}
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{
                background: "linear-gradient(135deg, #3b82f6, var(--accent))",
              }}
            />
            <i className="fa-solid fa-download relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Download CV</span>
            <i className="fa-solid fa-arrow-right relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="home-image flex-1 flex justify-end max-md:mt-16 max-md:justify-center animate-fadeInRight relative z-10">
        <div className="relative group">
          {/* Outer orbit ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[36vw] h-[36vw] max-md:w-[80vw] max-md:h-[80vw] rounded-full border border-dashed animate-spin-slow"
              style={{ borderColor: "rgba(var(--accent-rgb),0.2)" }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[28vw] h-[28vw] max-md:w-[65vw] max-md:h-[65vw] rounded-full animate-spin-reverse"
              style={{ border: "2px solid rgba(var(--accent-rgb),0.12)" }}
            />
          </div>

          {/* Soft glow blob behind image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[30vw] h-[70vh] max-md:w-full rounded-full blur-3xl animate-pulse"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(var(--accent-rgb),0.18) 0%, rgba(59,130,246,0.1) 60%, transparent 100%)",
              }}
            />
          </div>

          {/* Photo */}
          <img
            src={`${import.meta.env.BASE_URL}assets/images/Ashwin__1_-ai-brush-removebg-1jov1bs.png`}
            alt="Ashwin"
            className="relative z-10 h-[78vh] w-auto max-w-[34vw] object-contain animate-float max-md:max-w-full transition-all duration-500 group-hover:scale-105"
            style={{
              filter: "drop-shadow(0 0 3rem rgba(var(--accent-rgb),0.35))",
            }}
          />

          {/* Accent corner decorations */}
          <div
            className="absolute top-8 -right-8 w-16 h-16 rounded-full border-4 animate-spin-slow"
            style={{ borderColor: "rgba(var(--accent-rgb),0.5)" }}
          />
          <div
            className="absolute bottom-24 -left-8 w-12 h-12 rotate-45 animate-pulse"
            style={{ border: "3px solid rgba(59,130,246,0.5)" }}
          />
          <div
            className="absolute top-1/2 -right-6 w-3 h-3 rounded-full animate-ping"
            style={{ background: "var(--accent)", opacity: 0.6 }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10 opacity-60">
        <span
          className="text-[1.2rem] tracking-widest uppercase"
          style={{ color: "var(--accent)" }}
        >
          Scroll
        </span>
        <div
          className="w-[2px] h-8 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      </div>
    </section>
  );
};

export default Home;
