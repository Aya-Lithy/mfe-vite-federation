import { Suspense } from "react";
import {
  Router,
  Redirect,
  Route,
  Switch,
  type RouterProps,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Layout from "./components/Layout";
import { ToastContainer } from "./components/toaster";
import PageSpinner from "./components/Spinner";

import { ROUTES } from "src/routes";

import "bootstrap/dist/css/bootstrap.min.css";

type AppProps = {
  history: RouterProps["history"];
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      networkMode: "always",
    },
  },
});

const App: React.FC<AppProps> = ({ history }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />

      <Router history={history}>
        <Layout>
          <Suspense fallback={<PageSpinner isShown contained></PageSpinner>}>
            <Switch>
              {ROUTES.map((route, idx) => {
                if ("to" in route) {
                  return <Redirect key={idx} {...route} />;
                }
                return <Route key={idx} {...route} />;
              })}
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
export type { AppProps };
