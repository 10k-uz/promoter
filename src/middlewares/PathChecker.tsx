import { Navigate, useLocation } from "react-router-dom";

export const PathChecker = ({ children }: { children: any }) => {
  const accessToken = localStorage.getItem("accessToken");
  const authStep = localStorage.getItem("authStep");

  const location = useLocation();

  if (location.pathname === "/auth/confirm") {
    if (!authStep || authStep !== "VERIFY_EMAIL") {
      return <Navigate to="/auth/login" replace={true} />;
    }
  }

  if (!accessToken) {
    <Navigate to="/auth/login" replace={true} />;
  }

  if (accessToken && location.pathname.includes("auth")) {
    return <Navigate to="/" replace={true} />;
  }

  return <>{children}</>;
};
