import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes/index.tsx";
import { Toaster } from "react-hot-toast";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <Toaster />
      {process.env.NODE_ENV !== "production" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
