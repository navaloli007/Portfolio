import AngularLogo from "../assets/AngularLogo.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I&apos;m Naval Oli
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A skilled software developer with expertise in Angular, React, and
              web technologies, passionate about problem-solving and teamwork.
            </p>
          </div>
          <div className="mt-10">
            <div className="text-center mb-10">
              <p className="mt-2 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                My Journey
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                With 2.5 years of experience as a Software Developer at MMI
                Softwares, I contributed to building and maintaining web
                applications for diverse industries. I developed key projects
                such as Jwelly, Xpert, and CRM applications using Angular,
                RESTful APIs, and responsive design techniques. This experience
                enhanced my technical and collaborative skills.
              </p>
            </div>
            <div className="border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300">
              <h3 className="text-2xl font-semibold text-red-600">
                Skills & Expertise
              </h3>
              <div className="flex items-center justify-center flex-wrap gap-3">
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
                <div className="border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
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
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Apart from coding, I’m deeply passionate about learning new
              technologies and staying up-to-date with the latest web
              development trends. I enjoy problem-solving, often tackling
              challenges on platforms like LeetCode and HackerRank to improve my
              skills. My hobbies include listening to spiritual music, playing
              cricket, and fostering teamwork and physical fitness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
