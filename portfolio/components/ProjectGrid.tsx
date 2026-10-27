"use client";

import { projectData } from "@/lib/project-data";
import ProjectCard from "./ProjectCard";

type GridProps = {
  isDark: boolean;
  missingProject: string;
};

export default function ProjectGrid(props: GridProps) {
  const projectsToShow = projectData.filter(
    (project) => project.identifier != props.missingProject,
  );

  return (
    <div className="grid w-full md:grid-cols-2 grid-cols-1 gap-15">
      {projectsToShow.map((project, id) => {
        const projectUrl = "/projects/" + project.identifier;
        return (
          <ProjectCard
            key={id}
            imageUrl={project.imageUrl}
            name={project.name}
            cardDesc={project.cardDesc}
            roles={project.roles}
            isDark={props.isDark}
            projectLink={projectUrl}
          />
        );
      })}
    </div>
  );
}
