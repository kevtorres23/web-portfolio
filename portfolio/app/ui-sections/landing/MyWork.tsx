import ProjectGrid from "@/app/components/ProjectGrid";

export default function MyWork() {
  return (
    <main className="w-full flex flex-col items-start gap-10 h-auto bg-white md:py-30 py-25 md:px-25 px-8">
      <section className="flex md:flex-row flex-col gap-4 w-full items-center justify-between">
        <h1 className="text-5xl text-slate-900 tracking-[-3px] font-semibold">
          Mi trabajo
        </h1>
        <p className="text-base text-slate-600 md:max-w-64 md:text-right">Aquí puedes encontrar diferentes proyectos en los que he tenido la oportunidad de trabajar.</p>
      </section>

      <ProjectGrid isDark={false} missingProject="none"/>
    </main>
  );
}
