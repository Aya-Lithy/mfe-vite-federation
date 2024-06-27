import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import mountAuthApp from "authRemote/AuthApp";

interface OnNavigateParams {
  pathname: string;
}

const AuthApp = () => {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    if (!ref.current) return;

    const { onParentNavigate } = mountAuthApp(ref.current, {
      onNavigate: ({ pathname: nextPathname }: OnNavigateParams) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, [history]);

  return <div ref={ref} />;
};

export default AuthApp;
