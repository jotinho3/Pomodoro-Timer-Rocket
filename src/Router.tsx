import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { AnimatePresence } from "framer-motion";

export function Router() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
