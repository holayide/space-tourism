import { useSpaceData } from "@/hooks/useSpaceData";
import { useLocation } from "react-router-dom";

export default function ProfileImage() {
  const { pathname } = useLocation();
  const { crew } = useSpaceData();
  console.log(crew);

  const profile = crew.find((d) =>
    pathname.toLowerCase().includes(d.role.toLowerCase().replace(/\s+/g, "-"))
  );

  return (
    <div className="h-[350px] md:h-[560px] lg:-[553px]">
      {profile ? (
        <img
          src={profile.images.webp}
          alt={profile.role}
          className="bottom-0 size-full object-contain"
        />
      ) : (
        <p>No planet found</p>
      )}
    </div>
  );
}
