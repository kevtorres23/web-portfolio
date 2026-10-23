import Tag from "@/components/Tag";
import ToolCard from "@/components/ToolCard";

export default function AboutMe() {
  const frontendStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ];

  const backendStack = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Stripe",
    "NestJS",
  ];

  return (
    <main className="w-full flex flex-col items-start gap-10 h-auto bg-slate-900 md:py-30 py-25 md:px-25 px-8">
      <div className="flex md:flex-row flex-col gap-10 w-full md:items-center items-start justify-between">
        <section className="flex flex-col gap-4 lg:max-w-xl">
          <Tag icon="aboutme" text="Sobre mí" isDark />
          <h1 className="text-4xl/snug font-medium tracking-tighter">
            Me involucro en el proceso completo del desarrollo web.
          </h1>
          <p className="text-slate-300">
            He tenido la oportunidad de recorrer productos de software por todas
            sus fases y siempre encuentro algo emocionante y nuevo en ello. Es
            por eso que el desarrollo web me encanta tanto. Utilizo las
            siguientes herramientas en mi flujo de trabajo.
          </p>
        </section>

        <div className="md:w-45 md:h-45 w-40 h-40 rounded-full bg-[url(../public/me.jpeg)] bg-cover bg-no-repeat bg-center"></div>
      </div>

      <section className="flex flex-col gap-4">
        <h1 className="text-2xl/snug font-medium tracking-tighter">
          Tecnologías frontend
        </h1>
        <div className="flex flex-row gap-4 flex-wrap">
          {frontendStack.map((tool, id) => {
            return <ToolCard key={id} toolName={tool} />;
          })}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h1 className="text-2xl/snug font-medium tracking-tighter">
          Tecnologías backend
        </h1>
        <div className="flex flex-row gap-4 flex-wrap">
          {backendStack.map((tool, id) => {
            return <ToolCard key={id} toolName={tool} />;
          })}
        </div>
      </section>
    </main>
  );
}
