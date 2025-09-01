import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";

import { Europa, Mars, Moon, Titan } from "./components/features/destinations";
import {
  Commander,
  Engineer,
  Pilot,
  Specialist,
} from "./components/features/crews";

export default function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}
