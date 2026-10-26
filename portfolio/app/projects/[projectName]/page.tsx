import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from "@/ui-sections/project-showcase/ProjectHero";
import ProjectDetails from "@/ui-sections/project-showcase/ProjectDetails";
import { projectData } from "@/lib/project-data";
import ProjectCarousel from "@/ui-sections/project-showcase/ProjectCarousel";

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
    <div className="flex flex-col md:gap-25 gap-15 flex-1 items-start overflow-x-scroll justify-center bg-white font-sans">
      <Navbar />

      <ProjectHero
        name={project.name}
        desc={project.cardDesc}
        mainImg={project.imageUrl}
        roles={project.roles}
      />

      <ProjectDetails
        date={project.date}
        stack={project.stack}
        website={project.website}
        design={project.designFile}
        longDesc={project.fullDesc}
        objective={project.objective}
        results={project.results}
      />

      <ProjectCarousel imgUrls={[project.car1, project.car2, project.car3, project.car4]}/>

      <Footer />
    </div>
  );
}
