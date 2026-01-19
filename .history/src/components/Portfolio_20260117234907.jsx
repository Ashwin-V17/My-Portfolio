//
const Portfolio = () => {
  const projects = [
    {
      image: "/assets/snow_dawn/CourseHeroes_HomePage.png",
      title: "Web Design",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, nostrum?",
      link: "#"
    },
    {
      image: "/assets/Screenshot 2024-09-23 141554.png",
      title: "Web Design",
      description: "Developed a comprehensive student management system to efficiently add, update, remove, and fetch student details using the MERN stack.",
      link: "https://sdms-crud-frontend.onrender.com"
    },
    {
      image: "/assets/snow_dawn/Screenshot 2024-03-16 101307.png",
      title: "Web Design",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, nostrum?",
      link: "#"
    },
    {
      image: "/assets/snow_dawn/Screenshot 2024-09-25 002228.png",
      title: "Web Design",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, nostrum?",
      link: "#"
    }
  ];

  return (
    <section className="min-h-screen pt-[10rem] pr-[9%] pb-8 pl-[9%] bg-bg-secondary max-md:pt-[10rem] max-md:px-[3%] max-md:pb-28" id="portfolio">
      <h2 className="text-center text-[4.5rem] font-bold mb-16 max-md:text-[3rem]">
        Latest <span className="text-accent">Project</span>
      </h2>

      <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="relative rounded-[2rem] shadow-[0_0_1rem_#1f242d] overflow-hidden flex group"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-[34vh] transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full min-h-full bg-gradient-to-t from-accent to-black/10 flex items-center justify-center flex-col text-center px-16 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              <h4 className="text-[3rem] font-bold">{project.title}</h4>
              <p className="text-[1.6rem] my-6 mt-6 mb-4">
                {project.description}
              </p>
              <a 
                href={project.link} 
                title="link"
                className="inline-flex justify-center items-center w-20 h-20 bg-text-primary rounded-full"
              >
                <i className="fa-solid fa-arrow-up-right-from-square text-[1.8rem] text-bg-secondary"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;