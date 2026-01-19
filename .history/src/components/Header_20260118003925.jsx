import { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 150;

      // Check if scrolled past threshold
      setScrolled(window.scrollY > 50);

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-home' },
    { id: 'about', label: 'About', icon: 'fa-user' },
    { id: 'services', label: 'Services', icon: 'fa-briefcase' },
    { id: 'portfolio', label: 'Portfolio', icon: 'fa-folder-open' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full px-12 py-6 flex items-center justify-between z-50 max-md:px-8 transition-all duration-500 ${
      scrolled 
        ? 'bg-bg-primary/95 backdrop-blur-md shadow-[0_0.5rem_2rem_rgba(0,0,0,0.3)] border-b border-accent/10' 
        : 'bg-bg-primary'
    }`}>
      {/* Logo with Gradient */}
      <div className="logo-container relative group">
        <a 
          href="#home" 
          className="text-[2.5rem] font-bold cursor-pointer flex items-center gap-2 max-md:text-[2rem]"
          onClick={(e) => handleScroll(e, 'home')}
        >
          <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-accent transition-all duration-500">
            Ashwin
          </span>
          <span className="text-[1.8rem] text-gray-500 max-md:text-[1.4rem]">.dev</span>
        </a>
        {/* Underline animation */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-blue-500 group-hover:w-full transition-all duration-500"></span>
      </div>

      {/* Hamburger Menu Icon */}
      <div 
        className={`hidden max-md:block cursor-pointer relative w-10 h-10 flex items-center justify-center`}
        onClick={toggleMenu}
      >
        <div className="relative w-8 h-6 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-accent rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-accent rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-accent rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="max-md:hidden flex items-center gap-2">
        {navItems.map((item, index) => (
          
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleScroll(e, item.id)}
            className={`relative px-6 py-3 text-[1.7rem] font-medium transition-all duration-300 cursor-pointer rounded-full group ${
              activeSection === item.id 
                ? 'text-accent' 
                : 'text-text-primary hover:text-accent'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background on active */}
            {activeSection === item.id && (
              <span className="absolute inset-0 bg-accent/10 rounded-full border border-accent/30 animate-fadeIn"></span>
            )}
            
            {/* Hover background */}
            <span className="absolute inset-0 bg-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            
            {/* Text */}
            <span className="relative z-10">{item.label}</span>
          
            {/* Active indicator dot */}
            {activeSection === item.id && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
            )}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <nav className={`fixed top-[5rem] left-0 w-full bg-bg-primary/98 backdrop-blur-lg border-t border-accent/10 shadow-[0_1rem_3rem_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden md:hidden ${
        menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-8 py-4">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className={`group flex items-center gap-4 py-4 px-6 my-2 text-[1.8rem] font-medium rounded-2xl transition-all duration-300 cursor-pointer ${
                activeSection === item.id 
                  ? 'text-accent bg-accent/10 border-l-4 border-accent' 
                  : 'text-text-primary hover:text-accent hover:bg-accent/5 hover:translate-x-2 border-l-4 border-transparent'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: menuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
              }}
            >
              <i className={`fa-solid ${item.icon} text-[2rem] ${activeSection === item.id ? 'text-accent' : 'text-gray-500 group-hover:text-accent'} transition-colors duration-300`}></i>
              <span className="relative">
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                )}
              </span>
            </a>
          ))}
          
          {/* Mobile Menu Footer */}
          <div className="mt-6 pt-6 border-t border-accent/20">
            <a 
              href="/assets/Ashwin's__Resume.pdf"
              download="Ashwin-Resume"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-accent to-blue-500 text-white py-4 rounded-full font-semibold text-[1.6rem] hover:shadow-[0_0_2rem_rgba(14,239,255,0.5)] transition-all duration-300"
            >
              <i className="fa-solid fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;