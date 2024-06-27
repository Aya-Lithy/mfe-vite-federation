import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import history from "./services/navigation/history";

interface MountOptions {
  onNavigate?: (params: { pathname: string }) => void;
}

interface OnParentNavigateParams {
  pathname: string;
}

const mount = (el: HTMLElement, { onNavigate }: MountOptions = {}) => {
  if (onNavigate) {
    history.listen(onNavigate);
  }

  const root = ReactDOM.createRoot(el!);
  root.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>
  );

  return {
    onParentNavigate({ pathname: nextPathname }: OnParentNavigateParams) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

export default mount;
