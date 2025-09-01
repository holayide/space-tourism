import { useEffect, useState } from "react";
import type {
  CrewMember,
  Destination,
  SpaceData,
  SpaceDataContextType,
  SpaceDataProviderProps,
  Technology,
} from "@/components/types";
import { SpaceDataContext } from "@/contexts/spaceDataContext";

export function SpaceDataProvider({ children }: SpaceDataProviderProps) {
  const [spaceData, setSpaceData] = useState<SpaceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/data.json");

      if (!res.ok) {
        throw new Error(`Failed to load space data: ${res.status}`);
      }

      const result: SpaceData = await res.json();

      console.log("result:", result);
      setSpaceData(result);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  const getDestination = (name: string): Destination | undefined => {
    return spaceData?.destinations.find(
      (dest) => dest.name.toLowerCase() === name.toLowerCase()
    );
  };

  const getCrewMember = (role: string): CrewMember | undefined => {
    return spaceData?.crew.find(
      (member) => member.role.toLowerCase() === role.toLowerCase()
    );
  };

  const getTechnology = (name: string): Technology | undefined => {
    return spaceData?.technology.find(
      (tech) => tech.name.toLowerCase() === name.toLowerCase()
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  const refreshData = async () => {
    await loadData();
  };

  const contextValue: SpaceDataContextType = {
    spaceData,
    destinations: spaceData?.destinations || [],
    crew: spaceData?.crew || [],
    technology: spaceData?.technology || [],
    loading,
    error,
    refreshData,
    getDestination,
    getCrewMember,
    getTechnology,
  };

  return (
    <SpaceDataContext.Provider value={contextValue}>
      {children}
    </SpaceDataContext.Provider>
  );
}
