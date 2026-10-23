"use client"

import { projectData } from "@/app/lib/project-data";
import ProjectCard from "./ProjectCard";

type GridProps = {
    isDark: boolean;
    missingProject: string;
};

export default function ProjectGrid(props: GridProps) {
    return (
        <div className="grid w-full md:grid-cols-2 grid-cols-1 gap-15">
            {projectData.map((project, id) => {
                return (
                    <ProjectCard
                        key={id}
                        imageUrl={project.imageUrl}
                        name={project.name}
                        cardDesc={project.cardDesc}
                        roles={project.roles}
                        isDark={props.isDark}
                    />
                )
            })}
        </div>
    );
};