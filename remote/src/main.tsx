import mount from "./mount";
import "./i18n";

import "./index.css";

const devRoot = document.querySelector("#_auth-dev-root");

if (devRoot) {
  mount(devRoot as HTMLElement);
}
