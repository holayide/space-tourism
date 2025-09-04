import { useSpaceData } from "@/hooks/useSpaceData";
import { useLocation } from "react-router-dom";

export default function SpaceImages() {
  const { pathname } = useLocation();
  const { technology } = useSpaceData();

  console.log(technology);

  const tech = technology.find((d) =>
    pathname.toLowerCase().includes(d.name.toLowerCase().replace(/\s+/g, "-"))
  );

  console.log(tech);

  return (
    <div className="h-[258px] md:h-[357px] lg:h-[600px]">
      {tech ? (
        <>
          <img
            src={tech.images.portrait}
            alt={tech.name}
            className="size-full object-cover"
          />
        </>
      ) : (
        <p>No planet found</p>
      )}
    </div>
  );
}
