//services.jsx
const Services = () => {
  const services = [
    {
      icon: "fa-solid fa-layer-group",
      title: "Full Stack Development",
      description: "I specialize in building complete web applications from scratch, covering both the frontend and backend. Whether it's creating dynamic user interfaces or managing databases, I ensure seamless integration between the client and server sides."
    },
    {
      icon: "fa-brands fa-chrome",
      title: "Web Development",
      description: "From responsive web designs to efficient and optimized code, I bring your ideas to life by creating interactive and user-friendly websites. My focus is on delivering web applications that work across all platforms and devices."
    },
    {
      icon: "fa-brands fa-android",
      title: "Android Development",
      description: "I build high-performance, feature-rich Android applications that cater to various user needs. My goal is to provide smooth and intuitive user experiences while keeping scalability and performance in mind."
    }
  ];

  return (
    <section className="min-h-screen pt-[10rem] pr-[9%] pb-8 pl-[9%] max-md:pt-[10rem] max-md:px-[3%] max-md:pb-28" id="services">
      <h2 className="text-center text-[4.5rem] font-bold mb-20 max-md:mb-12">
        My <span className="text-accent">Services</span>
      </h2>
      <div className="flex items-center justify-center flex-wrap gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="flex-1 basis-[30rem] bg-bg-secondary px-8 pt-12 pb-16 rounded-[2rem] text-center border-2 border-bg-primary transition-all duration-500 hover:border-accent hover:scale-105"
          >
            <i className={`${service.icon} text-[7rem] text-accent mb-4`}></i>
            <h3 className="text-[2.6rem] font-bold">{service.title}</h3>
            <p className="text-[1.6rem] my-4 mb-12">
              {service.description}
            </p>
            <a 
              href="#" 
              className="inline-block bg-accent rounded-[4rem] px-11 py-4 shadow-[0_0_1rem_#0ef] tracking-wider text-[1.6rem] text-bg-secondary font-semibold transition-all duration-500 hover:shadow-none"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;