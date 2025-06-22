import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router";
import Layout from "./Layout";
import React, { useEffect } from "react";
import { routes } from "./routes";

const ScrollTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={React.createElement(route.element)}
              />
            ))}
          </Route>
        </Routes>
        <ScrollTop />
      </Router>
    </>
  );
}

export default AppRoutes;
