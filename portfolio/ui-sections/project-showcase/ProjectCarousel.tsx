import Image from "next/image";
import {
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

export default function ProjectCarousel({ imgUrls }: { imgUrls: string[] }) {
  return (
    <section className="w-full items-center justify-center lg:px-25 md:px-12 px-8 m-0">
      <Carousel
        opts={{
          align: "start",
        }}
        className="sm:max-w-full max-w-xs"
      >
        <CarouselPrevious />
        <CarouselContent className="w-full">
          {imgUrls.map((url, index) => (
            <CarouselItem key={index} className="basis-full lg:basis-1/2">
              <div className="">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </section>
  );
}
