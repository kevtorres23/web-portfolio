import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from "@/ui-sections/project-showcase/ProjectHero";
import ProjectDetails from "@/ui-sections/project-showcase/ProjectDetails";
import { projectData } from "@/lib/project-data";
import Image from "next/image";
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

  const projectImages = [
    project.car1,
    project.car2,
    project.car3,
    project.car4,
  ];

  return (
    <div className="flex flex-col md:gap-25 gap-15 flex-1 items-start max-w-full justify-center bg-white font-sans">
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

      <div className="md:block hidden">
        <ProjectCarousel
          imgUrls={[project.car1, project.car2, project.car3, project.car4]}
        />
      </div>

      <div className="md:hidden flex flex-col gap-8 px-8">
        {projectImages.map((url, index) => (
          <div key={index} className="w-full">
            <Image
              src={url}
              unoptimized={true}
              quality={100}
              alt=""
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />{" "}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
