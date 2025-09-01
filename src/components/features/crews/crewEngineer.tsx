import { useSpaceData } from "@/hooks/useSpaceData";
import Profile from "./profile";

export default function CrewEngineer() {
  const { getCrewMember, loading, error } = useSpaceData();

  if (loading)
    return <div className="loading">Loading space destinations...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const { name, role, bio } = getCrewMember("Flight Engineer")!;

  return (
    <Profile name={name} title={role}>
      {bio}
    </Profile>
  );
}
