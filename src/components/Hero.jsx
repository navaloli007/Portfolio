import hero from "../assets/Hero.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/Github.png";

const Hero = () => {
  return (
    <section className="relative" id="home">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I&apos;m Naval <span className="text-red-500">Oli</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Developer</p>
            <p className="mb-4">
              A passionate software developer with a keen interest in creating
              dynamic, responsive, and user-friendly web applications. With
              experience in building projects across various industries,
              including business accountancy, inventory management, and CRM
              systems, I specialize in Angular, React, and modern web
              technologies like Tailwind CSS and JavaScript.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a
                href="https://drive.google.com/file/d/1dEUTI2Ug0Qw7aSMt51kLfRaA9dLlPQUU/view?usp=drive_link"
                download
                target="_blank"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="" className="lg:h-[90vh] h-96" />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <a
          href="https://www.linkedin.com/in/naval-oli-50948617a/"
          target="_blank"
          className="block rounded-md p-1 text-base font-medium text-black hover:bg-gray-50 hover:text-gray-900"
        >
          <img src={linkedin} alt="" className="w-16 cursor-pointer" />
        </a>
        <a
          href="https://github.com/navaloli007"
          target="_blank"
          className="block rounded-md p-1 text-base font-medium text-black hover:bg-gray-50 hover:text-gray-900"
        >
          <img src={github} alt="" className="w-16 cursor-pointer" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
