import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/AppRoutes.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AppRoutes />
    <Analytics />
  </HelmetProvider>
);
