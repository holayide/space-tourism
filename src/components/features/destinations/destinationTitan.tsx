import { useSpaceData } from "@/hooks/useSpaceData";
import Planet from "./planet";

export default function DestinationTitan() {
  const { getDestination, loading, error } = useSpaceData();

  if (loading)
    return <div className="loading">Loading space destinations...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const { name, distance, travel, description } = getDestination("Titan")!;

  return (
    <Planet name={name} distance={distance} time={travel}>
      {description}
    </Planet>
  );
}
