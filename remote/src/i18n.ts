import i18n, { use } from "i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";

use(ChainedBackend)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    ns: ["translations"],
    defaultNS: "translations",
    // ... your i18next config
    backend: {
      backends: [
        HttpBackend,
        resourcesToBackend((lng, ns, clb) => {
          import(`./assets/${ns}/${lng}.js`)
            .then((resources) => clb(null, resources.default))
            .catch((error) => clb(null, error));
        }),
      ],
      backendOptions: [
        {
          loadPath: "/assets/{{ns}}/{{lng}}.js",
        },
      ],
    },
  });

i18n.on("missingKey", (lng, namespace, key, fallbackValue) => {
  console.warn(lng, namespace, key, fallbackValue);
});
