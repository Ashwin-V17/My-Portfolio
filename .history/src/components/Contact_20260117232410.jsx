const Contact = () => {
  return (
    <section className="min-h-screen pt-[10rem] pr-[9%] pb-8 pl-[9%] max-md:pt-[10rem] max-md:px-[3%] max-md:min-h-auto" id="contact">
      <h2 className="text-center text-[4.5rem] font-bold mb-12">
        Contact <span className="text-accent">Me</span>
      </h2>
      <form 
        action="https://formspree.io/f/mldrqpjg" 
        method="post"
        className="max-h-[70rem] mx-auto text-center mb-12"
      >
        <div className="flex justify-between flex-wrap">
          <input 
            type="text" 
            placeholder="Full Name" 
            name="Name" 
            className="text-[1.6rem] w-[49%] px-6 py-6 text-text-primary bg-bg-secondary rounded-[0.8rem] my-3 max-sm:w-full"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            name="email" 
            className="text-[1.6rem] w-[49%] px-6 py-6 text-text-primary bg-bg-secondary rounded-[0.8rem] my-3 max-sm:w-full"
          />
        </div>

        <div className="flex justify-between flex-wrap">
          <input 
            type="number" 
            placeholder="Phone Number" 
            name="Phone_no" 
            className="text-[1.6rem] w-[49%] px-6 py-6 text-text-primary bg-bg-secondary rounded-[0.8rem] my-3 max-sm:w-full"
          />
          <input 
            type="text" 
            placeholder="Email Subject" 
            name="subject" 
            className="text-[1.6rem] w-[49%] px-6 py-6 text-text-primary bg-bg-secondary rounded-[0.8rem] my-3 max-sm:w-full"
          />
        </div>

        <textarea
          name="Message"
          placeholder="Your Message"
          cols="30"
          rows="10"
          className="text-[1.6rem] w-full px-6 py-6 text-text-primary bg-bg-secondary rounded-[0.8rem] my-3 resize-none"
        >
        </textarea>
        <input 
          type="submit" 
          className="inline-block bg-accent rounded-[4rem] px-11 py-4 shadow-[0_0_1rem_#0ef] tracking-wider text-[1.6rem] text-bg-secondary font-semibold transition-all duration-500 hover:shadow-none mt-8 cursor-pointer" 
          value="Send Message" 
        />
      </form>
    </section>
  );
};

export default Contact;