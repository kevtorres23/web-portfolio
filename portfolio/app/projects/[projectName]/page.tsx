import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from "@/ui-sections/project-showcase/ProjectHero";
import { projectData } from "@/lib/project-data";
import { Suspense } from "react";

export const instant = false;

export default async function ProjectShowcase({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const { projectName } = await params;

  const project = projectData.filter(
    (project) => project.identifier === projectName,
  )[0];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
      <Navbar />

      <ProjectHero
        name={project.name}
        desc={project.fullDesc}
        mainImg={project.car1}
      />

      <Footer />
    </div>
  );
}
