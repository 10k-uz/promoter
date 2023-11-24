import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, HomeLayout } from "../layouts";
import { PathChecker } from "../middlewares";

import { ConfirmEmailForm, LoginForm, RegisterForm } from "../forms";

import { ProfileLayout } from "../layouts";
import {
  Dashboard,
  Transactions,
  Posts,
  Statistics,
  Streams,
  Profile,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
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
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <PathChecker>
        <AuthLayout />,
      </PathChecker>
    ),
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "confirm",
        element: <ConfirmEmailForm />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);
