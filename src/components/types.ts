import type { ReactNode } from "react";

export interface ImageSet {
  png: string;
  webp: string;
}

export interface TechnologyImageSet {
  portrait: string;
  landscape: string;
}

export interface Destination {
  name: string;
  images: ImageSet;
  description: string;
  distance: string;
  travel: string;
}

export interface CrewMember {
  name: string;
  images: ImageSet;
  role: string;
  bio: string;
}

export interface Technology {
  name: string;
  images: TechnologyImageSet;
  description: string;
}

export interface SpaceData {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
}

export interface SpaceDataContextType {
  spaceData: SpaceData | null;
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
  getDestination: (name: string) => Destination | undefined;
  getCrewMember: (name: string) => CrewMember | undefined;
  getTechnology: (name: string) => Technology | undefined;
}

export interface SpaceDataProviderProps {
  children: ReactNode;
}
