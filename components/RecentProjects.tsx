import { projects, projects2 } from "@/data";
import React from "react";
import { Card, Carousel } from "./ui/ProjectCarousel";

const RecentProjects = () => {
  const cards = projects2.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of {""}
        <span className="text-purple">recent projects</span>
      </h1>
      <div>
        <Carousel items={cards}></Carousel>
      </div>
    </div>
  );
};

export default RecentProjects;
