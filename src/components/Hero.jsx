import hero from "../assets/Hero.png";
// import linkedin from "../assets/linkedin.png";
import github from "../assets/Github.png";
import resume from "../assets/Naval_Resume.pdf";

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
              A passionate Frontend Developer with 3.6+ years of experience
              specializing in building dynamic, responsive, and scalable web
              applications. With hands-on experience across business
              accountancy, inventory management, CRM systems, and insurance
              domain platforms, I work extensively with modern frontend
              ecosystems including React.js, Next.js (SSR/SSG, App Router),
              Angular 18, and state management tools like Redux Toolkit and
              NgRx. I focus on crafting high-performance interfaces using
              Tailwind CSS, TypeScript, JavaScript (ES6+), and RxJS—backed by
              strong expertise in clean architecture, API integration,
              performance optimization, accessibility, and maintainable code
              practices.
            </p>

            <a
              href={resume}
              download
              className="bg-black text-white px-3 py-2 w-max rounded-md inline-block"
            >
              Download CV
            </a>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="" className="lg:h-[90vh] h-96" />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        {/* <a
          href="https://www.linkedin.com/in/naval-oli-50948617a/"
          target="_blank"
          className="block rounded-md p-1 text-base font-medium text-black hover:bg-gray-50 hover:text-gray-900"
        >
          <img src={linkedin} alt="" className="w-16 cursor-pointer" />
        </a> */}
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
