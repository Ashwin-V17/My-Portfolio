//Header
import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full px-12 py-8 bg-bg-primary flex items-center justify-between z-50 max-md:px-8">
      <div className="logo-container">
        <a href="#" className="text-text-primary text-[2.5rem] font-bold cursor-default">
          Portfolio
        </a>
      </div>

      <i 
        className={`fa-solid ${menuOpen ? 'fa-x' : 'fa-bars'} text-text-primary text-[3.6rem] hidden max-md:block cursor-pointer`}
        onClick={toggleMenu}
      ></i>

      <nav className={`max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:px-[3%] max-md:py-4 max-md:bg-bg-primary max-md:border max-md:border-black/20 max-md:shadow-lg ${menuOpen ? 'max-md:block' : 'max-md:hidden'}`}>
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          offset={-150} 
          duration={500}
          className="text-text-primary text-[1.7rem] ml-[4.2rem] transition-colors duration-300 hover:text-accent cursor-pointer max-md:block max-md:text-[2rem] max-md:my-12 max-md:ml-0"
          activeClass="text-accent"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link 
          to="about" 
          spy={true} 
          smooth={true} 
          offset={-150} 
          duration={500}
          className="text-text-primary text-[1.7rem] ml-[4.2rem] transition-colors duration-300 hover:text-accent cursor-pointer max-md:block max-md:text-[2rem] max-md:my-12 max-md:ml-0"
          activeClass="text-accent"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link 
          to="services" 
          spy={true} 
          smooth={true} 
          offset={-150} 
          duration={500}
          className="text-text-primary text-[1.7rem] ml-[4.2rem] transition-colors duration-300 hover:text-accent cursor-pointer max-md:block max-md:text-[2rem] max-md:my-12 max-md:ml-0"
          activeClass="text-accent"
          onClick={closeMenu}
        >
          Services
        </Link>
        <Link 
          to="portfolio" 
          spy={true} 
          smooth={true} 
          offset={-150} 
          duration={500}
          className="text-text-primary text-[1.7rem] ml-[4.2rem] transition-colors duration-300 hover:text-accent cursor-pointer max-md:block max-md:text-[2rem] max-md:my-12 max-md:ml-0"
          activeClass="text-accent"
          onClick={closeMenu}
        >
          Portfolio
        </Link>
        <Link 
          to="contact" 
          spy={true} 
          smooth={true} 
          offset={-150} 
          duration={500}
          className="text-text-primary text-[1.7rem] ml-[4.2rem] transition-colors duration-300 hover:text-accent cursor-pointer max-md:block max-md:text-[2rem] max-md:my-12 max-md:ml-0"
          activeClass="text-accent"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;