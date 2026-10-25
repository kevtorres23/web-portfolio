export default function ProjectCarousel({ imgUrls }: { imgUrls: string[] }) {
  return (
    <section className="flex flex-row gap-5 w-full h-auto overflow-x-scroll lg:px-25 md:px-12 px-8">
      {new Array(4).map((url, id) => {
        return (
          <div key={id} className="w-30 h-20 bg-slate-200 rounded-lg">
            {/*Project Image*/}
            <p>Hola</p>
          </div>
        );
      })}
    </section>
  );
}
