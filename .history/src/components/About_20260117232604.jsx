const About = () => {
  return (
    <section className="min-h-screen pt-[10rem] pr-[9%] pb-8 pl-[9%] flex justify-center items-center gap-8 bg-bg-secondary max-md:flex-col-reverse max-md:pt-[10rem] max-md:px-[3%] max-md:w-full" id="about">
      <div className="about-img w-full object-cover flex items-center justify-center max-md:mt-16">
        <img 
          src="/assets/Ashwin__1_-ai-brush-removebg-1jov1bs.png" 
          alt="Ashwin" 
          className="h-[80vh] w-[32vw] object-cover scale-[1.4] max-md:w-[70%]"
        />
      </div>
      <div className="about-content">
        <h2 className="text-left text-[4.5rem] font-bold  leading-[1.2]">
          About <span className="text-accent">Me</span>
        </h2>
        <h3 className="text-[2.6rem] font-bold">Full Stack Developer!</h3>
        <p className="text-[1.6rem] my-8">
          I&apos;m Ashwin from Chennai. I graduated with a Bachelor of Science in
          Computer Science from Agurchand Manmull Jain College with 75%. My
          short-term goal is to get placed in a company, and my long-term goal
          is to solve real-time problems for clients. My hobbies are listening
          to music and playing cricket.
        </p>
        <a 
          href="#" 
          className="inline-block bg-accent rounded-[4rem] px-11 py-4 shadow-[0_0_1rem_#0ef] tracking-wider text-[1.6rem] text-bg-secondary font-semibold transition-all duration-500 hover:shadow-none"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;