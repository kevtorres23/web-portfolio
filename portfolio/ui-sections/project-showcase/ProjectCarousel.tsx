import Image from "next/image";

export default function ProjectCarousel({ imgUrls }: { imgUrls: string[] }) {
  return (
    <section className="w-auto items-start h-auto lg:px-25 md:px-12 px-8">
      <div className="w-auto flex flex-row gap-5 overflow-x-hidden">
        {imgUrls.map((url, id) => {
          return (
            <div
              key={id}
              className="w-120 h-90 rounded-lg border border-slate-200"
            >
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
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
