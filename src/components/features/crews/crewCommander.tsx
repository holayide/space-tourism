import { useSpaceData } from "@/hooks/useSpaceData";
import Profile from "./profile";

export default function CrewCommander() {
  const { getCrewMember, loading, error } = useSpaceData();

  if (loading)
    return <div className="loading">Loading space destinations...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const { name, role, bio } = getCrewMember("Commander")!;

  return (
    <Profile name={name} title={role}>
      {bio}
    </Profile>
  );
}
