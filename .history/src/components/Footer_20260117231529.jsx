import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center flex-wrap px-[9%] py-8 bg-bg-secondary max-md:px-[3%] max-sm:flex-col-reverse">
      <div className="footer-text max-sm:text-center max-sm:mt-8">
        <p className="text-[1.6rem]">Copyright &copy; 2024 by Ashwin | All Rights Reserved.</p>
      </div>
      <div className="footer-icon-top">
        <Link 
          to="home" 
          smooth={true} 
          duration={500}
          title="NavToHome"
          className="inline-flex p-3 min-w-[4vw] rounded-[0.8rem] bg-accent justify-center items-center transition-all duration-500 hover:shadow-[0_0_1rem_#0ef] cursor-pointer max-sm:min-w-[4rem]"
        >
          <i className="fa-solid fa-arrow-up text-[2.4rem] text-bg-secondary"></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;