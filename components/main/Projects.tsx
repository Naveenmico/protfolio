import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col  md:flex-row gap-10 px-10">
        <ProjectCard
          src="/house.png"
          title="House Broker"
          description="House marketplace to buy or sell the listing."
          url="https://house-broker.vercel.app/"
        />
         <ProjectCard
          src="/insta.png"
          title="Reeler"
          description="A social media app where user upload reels/shorts."
          url="https://reeler-app.vercel.app/login"
        />
        
        </div>
      </div>
  );
};

export default Projects;
