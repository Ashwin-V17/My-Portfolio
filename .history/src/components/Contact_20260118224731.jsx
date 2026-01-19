import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mldrqpjg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fa-envelope',
      title: 'Email',
      value: 'ashwin.dev@example.com', // Replace with your actual email
      link: 'mailto:ashwin.dev@example.com',
      color: 'from-accent to-blue-500'
    },
    {
      icon: 'fa-phone',
      title: 'Phone',
      value: '+91 XXXXX XXXXX', // Replace with your actual phone
      link: 'tel:+91XXXXXXXXXX',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: 'fa-location-dot',
      title: 'Location',
      value: 'Chennai, Tamil Nadu',
      link: 'https://maps.google.com/?q=Chennai',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/ashwin-v-455b75245', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: 'fa-github', url: 'https://github.com/Ashwin-V17', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: 'fa-facebook', url: 'https://www.facebook.com/ashwin.V.17', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: 'fa-instagram', url: '#', label: 'Instagram', color: 'hover:text-pink-500' }
  ];

  return (
    <section className="relative min-h-screen pt-[10rem] pr-[9%] pb-8 pl-[9%] max-md:pt-[10rem] max-md:px-[3%] max-md:min-h-auto overflow-hidden" id="contact">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 max-md:mb-12 relative z-10">
        <div className="mb-4 animate-fadeInUp">
          <span className="text-[1.4rem] text-accent font-semibold tracking-wider uppercase opacity-80">
            Get In Touch
          </span>
        </div>
        <h2 className="text-[4.5rem] font-bold mb-4 max-md:text-[3.5rem] animate-fadeInUp animation-delay-200">
          Contact <span className="text-accent bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-[1.6rem] text-gray-400 max-w-[600px] mx-auto animate-fadeInUp animation-delay-300">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-[1400px] mx-auto relative z-10">
        {/* Contact Info - Left Side */}
        <div className="lg:col-span-2 space-y-8 animate-fadeInLeft">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group block bg-bg-secondary border-2 border-bg-primary hover:border-accent rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_3rem_rgba(14,239,255,0.2)]"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`fa-solid ${info.icon} text-[2rem] text-white`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[1.4rem] text-gray-400 mb-1">{info.title}</h3>
                    <p className="text-[1.6rem] font-semibold group-hover:text-accent transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                  <i className="fa-solid fa-arrow-right text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"></i>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="bg-bg-secondary border-2 border-bg-primary rounded-2xl p-6 animate-fadeInUp animation-delay-700">
            <h3 className="text-[2rem] font-bold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-share-nodes text-accent"></i>
              Connect With Me
            </h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group w-14 h-14 bg-accent/10 border-2 border-accent/30 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <i className={`fa-brands ${social.icon} text-[2rem] group-hover:text-white transition-colors duration-300`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Availability Badge */}
          <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 border-2 border-accent/30 rounded-2xl p-6 animate-fadeInUp animation-delay-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <p className="text-[1.8rem] font-bold text-accent">Available for Work</p>
                <p className="text-[1.4rem] text-gray-400">Open to new opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - Right Side */}
        <div className="lg:col-span-3 animate-fadeInRight">
          <form 
            onSubmit={handleSubmit}
            className="bg-bg-secondary border-2 border-bg-primary hover:border-accent/30 rounded-2xl p-8 max-md:p-6 transition-all duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="group">
                <label className="block text-[1.4rem] text-gray-400 mb-2 group-focus-within:text-accent transition-colors duration-300">
                  <i className="fa-solid fa-user mr-2"></i>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Monkey" 
                  required
                  className="w-full text-[1.6rem] px-6 py-4 text-text-primary bg-bg-primary border-2 border-transparent rounded-xl focus:border-accent focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="group">
                <label className="block text-[1.4rem] text-gray-400 mb-2 group-focus-within:text-accent transition-colors duration-300">
                  <i className="fa-solid fa-envelope mr-2"></i>
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required
                  className="w-full text-[1.6rem] px-6 py-4 text-text-primary bg-bg-primary border-2 border-transparent rounded-xl focus:border-accent focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="group">
                <label className="block text-[1.4rem] text-gray-400 mb-2 group-focus-within:text-accent transition-colors duration-300">
                  <i className="fa-solid fa-phone mr-2"></i>
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX" 
                  className="w-full text-[1.6rem] px-6 py-4 text-text-primary bg-bg-primary border-2 border-transparent rounded-xl focus:border-accent focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="group">
                <label className="block text-[1.4rem] text-gray-400 mb-2 group-focus-within:text-accent transition-colors duration-300">
                  <i className="fa-solid fa-tag mr-2"></i>
                  Subject *
                </label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion" 
                  required
                  className="w-full text-[1.6rem] px-6 py-4 text-text-primary bg-bg-primary border-2 border-transparent rounded-xl focus:border-accent focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="group mb-6">
              <label className="block text-[1.4rem] text-gray-400 mb-2 group-focus-within:text-accent transition-colors duration-300">
                <i className="fa-solid fa-message mr-2"></i>
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="8"
                required
                className="w-full text-[1.6rem] px-6 py-4 text-text-primary bg-bg-primary border-2 border-transparent rounded-xl focus:border-accent focus:outline-none resize-none transition-all duration-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="group w-full bg-gradient-to-r from-accent to-blue-500 rounded-full px-11 py-5 tracking-wider text-[1.6rem] text-white font-semibold transition-all duration-500 hover:shadow-[0_0_2rem_#0ef,0_0_4rem_#0ef] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i>
                    Send Message
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
                  </>
                )}
              </span>
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-500/10 border-2 border-green-500/30 rounded-xl text-green-500 text-center animate-fadeIn">
                <i className="fa-solid fa-check-circle mr-2"></i>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-500/10 border-2 border-red-500/30 rounded-xl text-red-500 text-center animate-fadeIn">
                <i className="fa-solid fa-exclamation-circle mr-2"></i>
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 relative z-10 animate-fadeInUp animation-delay-1000">
        <p className="text-[1.6rem] text-gray-400 mb-4">
          Prefer to download my resume?
        </p>
        <a 
          href="/assets/Ashwin's__Resume.pdf"
          download="Ashwin-Resume"
          className="group relative inline-block bg-transparent border-2 border-accent rounded-[4rem] px-11 py-4 tracking-wider text-[1.6rem] text-accent font-semibold transition-all duration-500 hover:bg-accent hover:text-bg-secondary hover:shadow-[0_0_2rem_#0ef] hover:scale-105 overflow-hidden max-md:text-[1.4rem] max-md:px-8 max-md:py-3"
        >
          <span className="relative z-10 flex items-center gap-2 justify-center">
            <i className="fa-solid fa-download"></i>
            Download Resume
            <i className="fa-solid fa-file-pdf group-hover:scale-110 transition-transform duration-300"></i>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;