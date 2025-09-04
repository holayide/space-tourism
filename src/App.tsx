import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import Home from "./pages/home";

const Destination = lazy(() => import("./pages/destination"));
const Crew = lazy(() => import("./pages/crew"));
const Technology = lazy(() => import("./pages/technology"));

const Moon = lazy(
  () => import("./components/features/destinations/destinationMoon")
);
const Mars = lazy(
  () => import("./components/features/destinations/destinationMars")
);
const Europa = lazy(
  () => import("./components/features/destinations/destinationEuropa")
);
const Titan = lazy(
  () => import("./components/features/destinations/destinationTitan")
);

const Commander = lazy(
  () => import("./components/features/crews/crewCommander")
);
const Specialist = lazy(
  () => import("./components/features/crews/crewSpecialist")
);
const Pilot = lazy(() => import("./components/features/crews/crewPilot"));
const Engineer = lazy(() => import("./components/features/crews/crewEngineer"));

const Vehicle = lazy(
  () => import("./components/features/technology/technologyVehicle")
);
const Capsule = lazy(
  () => import("./components/features/technology/techonologyCapsule")
);
const Spaceport = lazy(
  () => import("./components/features/technology/technologySpaceport")
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/destination" element={<Destination />}>
            <Route index element={<Navigate to="moon" replace />} />
            <Route path="moon" element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Route>

          <Route path="/crew" element={<Crew />}>
            <Route index element={<Navigate to="commander" replace />} />
            <Route path="commander" element={<Commander />} />
            <Route path="mission-specialist" element={<Specialist />} />
            <Route path="pilot" element={<Pilot />} />
            <Route path="flight-engineer" element={<Engineer />} />
          </Route>

          <Route path="/technology" element={<Technology />}>
            <Route index element={<Navigate to="launch-vehicle" replace />} />
            <Route path="launch-vehicle" element={<Vehicle />} />
            <Route path="space-capsule" element={<Capsule />} />
            <Route path="spaceport" element={<Spaceport />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
