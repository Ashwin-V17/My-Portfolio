import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 100;
      const offsetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 150;
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top && scrollPosition < top + section.offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl border-b"
          : "py-6"
      }`}
      style={{
        background: scrolled ? "var(--glass-bg)" : "transparent",
        borderBottomColor: scrolled ? "var(--border-color)" : "transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-[5%] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-bg-primary font-black text-xl shadow-[0_0_1.5rem_rgba(var(--accent-rgb),0.6)] group-hover:scale-110 transition-transform duration-300">
            A
          </div>
          <span className="text-text-primary text-[2.2rem] font-bold tracking-tight">
            Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className={`relative px-5 py-2 text-[1.6rem] font-medium rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? "text-accent"
                  : "text-text-primary hover:text-accent"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-6 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative w-[5.6rem] h-[3rem] rounded-full border-2 transition-all duration-500 flex items-center overflow-hidden cursor-pointer hover:scale-105 focus:outline-none"
            style={{
              background:
                theme === "dark"
                  ? "linear-gradient(135deg, #1a1f2e, #2d3748)"
                  : "linear-gradient(135deg, #e0f2fe, #bfdbfe)",
              borderColor: "var(--accent)",
              boxShadow: "0 0 1rem rgba(var(--accent-rgb), 0.3)",
            }}
          >
            {/* Track icons */}
            <span className="absolute left-[0.6rem] text-[1.4rem] transition-all duration-500 select-none"
              style={{ opacity: theme === 'dark' ? 1 : 0, transform: theme === 'dark' ? 'scale(1)' : 'scale(0.5)' }}>
              🌙
            </span>
            <span className="absolute right-[0.6rem] text-[1.4rem] transition-all duration-500 select-none"
              style={{ opacity: theme === 'light' ? 1 : 0, transform: theme === 'light' ? 'scale(1)' : 'scale(0.5)' }}>
              ☀️
            </span>
            {/* Knob */}
            <span
              className="absolute top-[3px] w-[2.2rem] h-[2.2rem] rounded-full shadow-md transition-all duration-500"
              style={{
                left: theme === "dark" ? "3px" : "calc(100% - 2.5rem)",
                background: "var(--accent)",
                boxShadow: "0 0 0.8rem rgba(var(--accent-rgb), 0.7)",
              }}
            />
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer group"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] w-7 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              style={{ background: 'var(--accent)' }} />
            <span className={`block h-[2px] w-7 rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
              style={{ background: 'var(--accent)' }} />
            <span className={`block h-[2px] w-7 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              style={{ background: 'var(--accent)' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full backdrop-blur-xl border-b transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "var(--glass-bg)",
          borderBottomColor: "var(--border-color)",
        }}
      >
        <nav className="flex flex-col px-[5%] py-6 gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className={`text-[1.8rem] font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? "text-accent bg-accent/10"
                  : "text-text-primary hover:text-accent hover:bg-accent/5"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
