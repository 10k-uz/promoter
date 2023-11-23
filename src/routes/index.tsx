import { Outlet, createBrowserRouter } from "react-router-dom";
import { promoterRoutes } from "./promoter";
import { AuthLayout, HomeLayout } from "../layouts";
import { PathChecker } from "../middlewares";
import { authRoutes } from "./auth";

export const router = createBrowserRouter([
  {
    /** @promoters_layer ---> layer of promoters, includes auth, main layouts and routes */
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        children: [...promoterRoutes],
      },
      {
        path: "/auth",
        element: (
          <PathChecker>
            <AuthLayout />,
          </PathChecker>
        ),
        children: [...authRoutes],
      },
      {
        path: "*",
        element: <h1>Not found</h1>,
      },
    ],
  },
]);
