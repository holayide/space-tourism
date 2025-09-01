import { useSpaceData } from "@/hooks/useSpaceData";
import { useLocation } from "react-router-dom";

export default function PlanetImages() {
  const { pathname } = useLocation();
  const { destinations } = useSpaceData();

  const destination = destinations.find((d) =>
    pathname.toLowerCase().includes(d.name.toLowerCase())
  );

  return (
    <div className="size-[150px] md:size-[300px] lg:size-[480px] my-6 md:my-[42px] lg:my-0 flex items-center justify-center">
      {destination ? (
        <img
          src={destination.images.webp}
          alt={destination.name}
          className="size-full lg:size-auto"
        />
      ) : (
        <p>No planet found</p>
      )}
    </div>
  );
}
