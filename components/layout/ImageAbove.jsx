import React from "react";
import ProjectCard from "../cards/FinalProjectCard/ProjectCard";

export default function ImageAbove(props) {
  const { src = "/HeaderImage.jpeg", component = <ProjectCard /> } = props;
  return (
    <div className="relative">
      <div className="h-72 overflow-hidden">
        <img src={src} className="w-[100%] mx-auto" />
      </div>
      <div className="absolute left-[12%] -bottom-12">{component}</div>
    </div>
  );
}
