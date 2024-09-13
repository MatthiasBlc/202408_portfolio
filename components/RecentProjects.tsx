import { projects } from "@/data";
import React from "react";
import { Card, Carousel } from "./ui/ProjectCarousel";

const RecentProjects = () => {
  const cards = projects.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Mes derniers {""}
        <span className="text-purple">projets</span>
      </h1>
      <div>
        <Carousel items={cards}></Carousel>
      </div>
    </div>
  );
};

export default RecentProjects;
