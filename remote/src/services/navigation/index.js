import { PATHS } from "src/routes";
import history from "./history";
import {
  ACCOUNTS_SERVICE_URL,
  IDENTITY_SERVICE_URL,
} from "src/configs/constants";

export const goTo = (path, options) => {
  const urlParams = new URLSearchParams(window.location.search);
  if (options && options.extendParams && Object.keys(options.extendParams)) {
    for (const param in options.extendParams) {
      if (param in options.extendParams) {
        const value = options.extendParams[param];

        if (!value) continue;

        urlParams.set(param, value);
      }
    }
  }
  const newPath =
    (path.endsWith("/") ? path : path + "/") +
    (urlParams ? "?" + urlParams : "");

  history.push(newPath);
};

export const goToLogout = () => {
  history.push(PATHS.LOGOUT + "/" + window.location.search);
};

export const goToLogin = () => {
  history.push(PATHS.LOGIN + "/" + window.location.search);
};

export const goToAccount = () => {
  window.location = ACCOUNTS_SERVICE_URL;
};

export const goToNotFound = () => {
  history.push(PATHS.EMPTY);
  window.location =
    IDENTITY_SERVICE_URL.replace(/\/+$/, "") + PATHS.NOT_FOUND_ERROR;
};
