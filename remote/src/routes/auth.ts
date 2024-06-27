import { lazy } from "react";

const Login = lazy(() => import("src/features/Login"));

export const AUTH_PATHS = {
  LOGIN: "/login",
};

export const AUTH_ROUTES = [
  {
    exact: true,
    from: "/",
    to: AUTH_PATHS.LOGIN,
  },
  {
    path: AUTH_PATHS.LOGIN,
    exact: true,
    isPrivate: false,
    component: Login,
  },
];
