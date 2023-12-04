import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Layout/Router/Router.jsx";
import AuthContext from "./Sheard/Auth/AuthContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </QueryClientProvider>
);
