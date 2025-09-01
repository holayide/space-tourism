import type { SpaceDataContextType } from "@/components/types";
import { createContext } from "react";

// Create the context
export const SpaceDataContext = createContext<SpaceDataContextType | undefined>(
  undefined
);
