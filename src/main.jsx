import { StrictMode } from "react";

import { router } from "./routes.jsx";

import * as React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />

  </StrictMode>
);
