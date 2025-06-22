import Learn from "../pages/Learn";
import Policy from "../pages/Policy";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const routes = [
  {
    path: "/",
    element: Landing,
  },
  {
    path: "/home",
    element: Home,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/contact",
    element: Contact,
  },
  {
    path: "/learn",
    element: Learn,
  },
  {
    path: "/policy",
    element: Policy,
  },
];
