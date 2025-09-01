import type { SpaceDataContextType } from "@/components/types";
import { SpaceDataContext } from "@/contexts/spaceDataContext";
import { useContext } from "react";

export const useSpaceData = (): SpaceDataContextType => {
  const context = useContext(SpaceDataContext);
  if (context === undefined) {
    throw new Error("useSpaceData must be used within a SpaceDataProvider");
  }
  return context;
};
