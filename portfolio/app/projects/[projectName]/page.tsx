import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from "@/ui-sections/project-showcase/ProjectHero";
import ProjectDetails from "@/ui-sections/project-showcase/ProjectDetails";
import { projectData } from "@/lib/project-data";
import Image from "next/image";
import ProjectCarousel from "@/ui-sections/project-showcase/ProjectCarousel";
import ProjectGrid from "@/components/ProjectGrid";
import { redirect } from "next/navigation";

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

  if (!project) {
    redirect("/");
  };

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

      <div className="w-full flex flex-col">
        <main className="w-full flex flex-col items-start justify-between lg:gap-15 gap-14 h-auto bg-slate-900 md:py-30 py-20 lg:px-25 md:px-14 px-8">
          <section className="flex md:flex-row flex-col gap-4 w-full md:items-center items-start justify-between">
            <h1 className="md:text-5xl text-4xl text-slate-50 tracking-[-3px] font-medium">
              Otros proyectos
            </h1>
            <p className="text-sm text-slate-300 md:max-w-64 md:text-right">
              ¡Conoce el resto de mi trabajo a continuación! Selecciona una tarjeta para ver más detalles.
            </p>
          </section>

          <ProjectGrid isDark missingProject={project.identifier} />
        </main>

        <Footer />
      </div>
    </div>
  );
}
