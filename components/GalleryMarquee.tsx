import Image from "next/image";
import { galleryImages } from "@/data/gallery";

function Track({ direction }: { direction: "left" | "right" }) {
  // Duplicated so translateX(-50%) loops back to an identical starting point.
  const track = [...galleryImages, ...galleryImages];

  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-4 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}>
        {track.map((image, i) => (
          <div
            key={`${image.src}-${i}`}
            className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-charcoal/5 sm:h-56 sm:w-56"
          >
            <Image src={image.src} alt={image.alt} fill sizes="224px" className="object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function GalleryMarquee() {
  return (
    <div className="space-y-4">
      <Track direction="left" />
      <Track direction="right" />
    </div>
  );
}
