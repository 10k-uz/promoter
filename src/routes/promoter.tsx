import { TopBar } from "../components/fixed";
import { ProfileLayout } from "../layouts";
import {
  Dashboard,
  Transactions,
  Posts,
  Statistics,
  Streams,
  Profile,
} from "../pages";
import { RouteObject } from "react-router-dom";

export const promoterRoutes: RouteObject[] = [
  {
    index: true,
    element: <Dashboard />,
  },
  {
    path: "posts",
    element: <Posts />,
  },
  {
    path: "streams",
    element: <Streams />,
  },
  {
    path: "stats",
    element: <Statistics />,
  },
  {
    path: "transactions",
    element: <Transactions />,
  },
  {
    path: "profile",
    element: <ProfileLayout />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      // {
      //   path: "change-password",
      //   element: <ChangePassword />,
      // },
      // {
      //   path: "change-email",
      //   element: <ChangeEmail />,
      // },
    ],
  },
];
