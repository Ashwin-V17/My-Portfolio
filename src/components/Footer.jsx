import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  const socials = [
    { href: 'https://www.linkedin.com/in/ashwin-vilson-455b75245/', icon: 'fa-linkedin', label: 'LinkedIn' },
    { href: 'https://github.com/Ashwin-V17', icon: 'fa-github', label: 'GitHub' },
    { href: 'https://www.facebook.com/ashwin.V.17', icon: 'fa-facebook', label: 'Facebook' },
    { href: 'https://www.instagram.com/ashwin____17/', icon: 'fa-instagram', label: 'Instagram' },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: theme === 'light'
          ? 'linear-gradient(180deg, #e8edf3 0%, #dde4ed 100%)'
          : 'linear-gradient(180deg, #252b36 0%, #1a1f2a 100%)',
        borderTop: '1px solid',
        borderTopColor: theme === 'light' ? '#cbd5e0' : 'rgba(0,238,255,0.1)',
      }}
    >
      {/* Accent gradient line at top */}
      <div className="w-full h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), #3b82f6, transparent)' }} />

      <div className="max-w-[1200px] mx-auto px-[5%] pt-12 pb-6">
        {/* Main footer row */}
        <div className="flex flex-wrap justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-[300px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl text-bg-primary"
                style={{ background: 'var(--accent)' }}>
                A
              </div>
              <span className="text-[2.2rem] font-bold" style={{ color: 'var(--text-primary)' }}>Ashwin</span>
            </div>
            <p className="text-[1.4rem] leading-relaxed text-gray-400">
              Full Stack & Mobile Developer building scalable, production-ready apps with React, React Native, Node.js and more.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-[1.6rem] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <a href={href}
                    className="text-[1.4rem] text-gray-400 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-[2px] inline-block transition-all duration-300" style={{ background: 'var(--accent)' }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-[1.6rem] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Connect</h4>
            <div className="flex gap-3">
              {socials.map(({ href, icon, label }) => (
                <a key={label} href={href} title={label} target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border flex items-center justify-center text-accent text-[1.6rem] hover:bg-accent hover:text-bg-primary hover:border-accent hover:scale-110 transition-all duration-300"
                  style={{ borderColor: 'rgba(var(--accent-rgb),0.3)' }}>
                  <i className={`fa-brands ${icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-6" style={{ background: theme === 'light' ? '#cbd5e0' : 'rgba(255,255,255,0.06)' }} />

        {/* Bottom row */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <p className="text-[1.4rem] text-gray-400">
            Copyright &copy; 2024 <span className="font-semibold" style={{ color: 'var(--accent)' }}>Ashwin</span>. All Rights Reserved.
          </p>
          <a href="#home" onClick={scrollToTop} title="Back to top"
            className="group inline-flex items-center gap-2 text-[1.4rem] font-semibold text-accent hover:scale-105 transition-all duration-300">
            <span>Back to top</span>
            <div className="w-9 h-9 rounded-full flex items-center justify-center border-2 border-accent group-hover:bg-accent group-hover:text-bg-primary transition-all duration-300">
              <i className="fa-solid fa-arrow-up text-[1.4rem]" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;