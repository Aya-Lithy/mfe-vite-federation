import { AUTH_PATHS, AUTH_ROUTES } from "./auth";

interface PathsObject {
  [key: string]: string;
}

interface RedirectRoute {
  exact: boolean;
  from: string;
  to: string;
}

interface NormalRoute {
  path: string;
  exact?: boolean;
  component?: React.ComponentType<() => JSX.Element>;
  isPrivate?: boolean;
}

type RouteConfig = RedirectRoute | NormalRoute;

export const ROUTES: RouteConfig[] = [...AUTH_ROUTES];
export const PATHS: PathsObject = { ...AUTH_PATHS };
