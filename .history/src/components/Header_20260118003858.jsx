//Header.jsx
import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    closeMenu();

    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full px-12 py-8 bg-bg-primary flex items-center justify-between z-50 max-md:px-8">
      <div className="logo-container">
        <a
          href="#home"
          className="text-text-primary text-[2.5rem] font-bold cursor-default"
        >
          Portfolio
        </a>
      </div>

      <i
        className={`fa-solid ${
          menuOpen ? "fa-x" : "fa-bars"
        } text-text-primary text-[3.6rem] hidden max-md:block cursor-pointer`}
        onClick={toggleMenu}
      ></i>

      <nav
        className={`max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:px-[3%] max-md:py-4 max-md:bg-bg-primary max-md:border max-md:border-black/20 max-md:shadow-lg ${
          menuOpen ? "max-md:block" : "max-md:hidden"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleScroll(e, item.id)}
            className={`text-[1.7rem] ml-[4.2rem] transition-colors duration-300 hover:text-accent cursor-pointer max-md:block max-md:text-[2rem] max-md:my-12 max-md:ml-0 ${
              activeSection === item.id ? "text-accent" : "text-text-primary"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
