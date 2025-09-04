import { useSpaceData } from "@/hooks/useSpaceData";
import Space from "./space";

export default function TechonologyCapsule() {
  const { getTechnology, loading, error } = useSpaceData();

  if (loading) return <div className="loading">Loading technologies...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const { name, description } = getTechnology("Space capsule")!;

  return <Space name={name} description={description}></Space>;
}
