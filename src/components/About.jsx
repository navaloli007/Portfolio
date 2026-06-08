import AngularLogo from "../assets/AngularLogo.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import NextLogo from "../assets/next.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ---------------------- HEADER ---------------------- */}
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>

            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I&apos;m Naval Oli
            </p>

            {/* --- NEW Resume-Style Intro Paragraph --- */}
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A performance-driven Frontend Engineer with 3.6+ years of experience
              building scalable, responsive, and production-ready web
              applications. I specialize in modern ecosystems including{" "}
              <span className="font-semibold">React.js</span>,{" "}
              <span className="font-semibold">Next.js</span>, and{" "}
              <span className="font-semibold">Angular 18</span>, with strong
              expertise in state management using{" "}
              <span className="font-semibold">Redux Toolkit</span> and{" "}
              <span className="font-semibold">NgRx</span>. I have delivered
              enterprise-grade solutions across CRM, inventory management,
              accounting, and insurance platforms—focusing on reusable
              architecture, performance optimization, accessibility, API
              integration, and clean, maintainable code using TypeScript, ES6+,
              RxJS, Tailwind CSS, and Angular Material.
            </p>
          </div>

          {/* ---------------------- JOURNEY ---------------------- */}
          <div className="mt-10">
            <div className="mt-10">
              <div className="text-center mb-10">
                {/* Title */}
                <p className="mt-2 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                  My Journey
                </p>

                {/* Current Company */}
                <div className="mt-6">
                  <p className="text-xl font-semibold text-gray-900">
                    Software Engineer — Nexon Softwares Solution
                  </p>
                  <p className="mt-3 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    Currently contributing to enterprise-level applications in
                    the
                    <span className="font-semibold"> insurance domain</span>,
                    where I work extensively with modern frontend technologies
                    to build scalable, secure, and performance-optimized user
                    interfaces. This role strengthens my expertise in real-world
                    production systems, enterprise workflows, and high-quality
                    engineering practices.
                  </p>
                </div>

                {/* Divider */}
                <div className="w-20 h-1 bg-gray-300 mx-auto my-8 rounded-full"></div>

                {/* Previous Company */}
                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    Software Developer — MMI Softwares
                  </p>
                  <p className="mt-3 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    At MMI Softwares, I built and maintained full-scale web
                    applications across multiple domains. I developed key
                    products such as
                    <span className="font-semibold">
                      {" "}
                      Jwelly, Xpert, and CRM applications{" "}
                    </span>
                    using Angular, REST APIs, and responsive UI
                    architectures—improving user experience, system efficiency,
                    and the overall product lifecycle.
                  </p>
                </div>
              </div>
            </div>

            {/* ---------------------- SKILLS ---------------------- */}
            <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300">
              <h3 className="text-2xl font-semibold text-red-600">
                Skills & Expertise
              </h3>

              <div className="flex items-center justify-center flex-wrap gap-3">
                {/* Skill Items */}
                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={Html} alt="" className="w-10" />
                  <span className="font-semibold">HTML</span>
                </div>

                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={Css} alt="" className="w-8" />
                  <span className="font-semibold">CSS</span>
                </div>

                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={Javascript} alt="" className="w-10" />
                  <span className="font-semibold">Javascript</span>
                </div>

                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={AngularLogo} alt="" className="w-9" />
                  <span className="font-semibold">Angular</span>
                </div>

                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={ReactLogo} alt="" className="w-8 rounded-full" />
                  <span className="font-semibold">React</span>
                </div>

                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={ReduxLogo} alt="" className="w-8" />
                  <span className="font-semibold">Redux</span>
                </div>

                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={NextLogo} alt="" className="w-8" />
                  <span className="font-semibold">Next JS</span>
                </div>

                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={Tailwind} alt="" className="w-8 rounded-full" />
                  <span className="font-semibold">Tailwind Css</span>
                </div>

                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={Bootstrap} alt="" className="w-10" />
                  <span className="font-semibold">Bootstrap</span>
                </div>

                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={NodeLogo} alt="" className="w-10" />
                  <span className="font-semibold">Node Js</span>
                </div>

                <div className="border border-red-300 flex items-center w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={Mongodb} alt="" className="w-10" />
                  <span className="font-semibold">Mongodb</span>
                </div>

                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={Express} alt="" className="w-10" />
                  <span className="font-semibold">Express Js</span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------- MORE ABOUT ME ---------------------- */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Beyond coding, I am passionate about continuous learning and
              staying updated with modern web technologies. I enjoy solving
              algorithmic challenges on platforms like HackerRank and LeetCode,
              and I’m driven by building impactful products that improve user
              experience. Outside of tech, I love listening to spiritual music,
              playing cricket, and engaging in activities that promote teamwork
              and personal growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
