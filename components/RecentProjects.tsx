import { projects, projects2 } from "@/data";
import React from "react";
import { Card, Carousel } from "./ui/ProjectCarousel";

const RecentProjects = () => {
  const cards = projects2.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of {""}
        <span className="text-purple">recent projects</span>
      </h1>
      <div>
        <Carousel items={cards}></Carousel>
      </div>
      {/* <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id}>{title}</div>
        ))}
      </div> */}
    </div>
  );
};

export default RecentProjects;
