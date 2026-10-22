import HeroProjectCard from "@/components/HeroProjectCard";

export default function LandingHero() {
  return (
    <main className="flex flex-col gap-12 w-full h-auto pb-30 lg:pt-45 items-center justify-center">
      <div className="central-text flex flex-col gap-5 items-center justify-center xl:max-w-xl">
        <h1 className="text-5xl/tight tracking-[-3.5px] font-medium text-center text-slate-900">
          ¡Hola! Soy Kevin. Diseño y desarrollo{" "}
          <span className="text-main font-semibold">soluciones web</span>.
        </h1>
        <p className="text-center text-slate-600">
          Me fascina el proceso completo de desarrollar soluciones web. Combino
          herramientas de diseño con habilidades de código para crear productos
          web completos y funcionales.
        </p>
      </div>

      <HeroProjectCard />
    </main>
  );
}
