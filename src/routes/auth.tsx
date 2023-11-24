import { TopBar } from "../components/fixed";
import { ConfirmEmailForm, LoginForm, RegisterForm } from "../forms";
import { RouteObject } from "react-router-dom";

export const authRoutes: RouteObject[] = [
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
];
