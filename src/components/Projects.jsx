import Portfolio from "../assets/portfolio.png";
import Netflix_GPT from "../assets/Netflix_GPT.png";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      id: 1,
      title: "Portfolio",
      desc: "Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.",
      image: Portfolio,
      live: "https://portfolio-tau-sable-23.vercel.app/",
      github: "https://github.com/navaloli007/Portfolio/tree/main",
    },
    {
      id: 2,
      title: "Netflix_GPT",
      desc: "Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.",
      image: Netflix_GPT,
      live: "",
      github: "https://github.com/navaloli007/Netflix-GPT",
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            return <Cards key={items.id} item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
