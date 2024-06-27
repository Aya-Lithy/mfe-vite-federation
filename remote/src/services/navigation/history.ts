import { createBrowserHistory, createMemoryHistory } from "history";

const history =
  import.meta.env.MODE === "development"
    ? createBrowserHistory()
    : createMemoryHistory();

export default history;
