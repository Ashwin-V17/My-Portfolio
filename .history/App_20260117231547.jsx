import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact form', {
      origin: 'bottom',
    });
    ScrollReveal().reveal('.home-content h1, .about-img', {
      origin: 'left',
    });
    ScrollReveal().reveal('.home-content p, .about-content', {
      origin: 'right',
    });
  }, []);

  return (
    <div className="bg-bg-primary text-text-primary">
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;