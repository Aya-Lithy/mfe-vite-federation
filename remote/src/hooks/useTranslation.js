import { useTranslation as useOriginalTranslation } from "react-i18next";
import { t as originalTranslate } from "i18next";

const lowerCase = (string) => string.toLowerCase();
const trim = (string) => string.trim();
const chain =
  (...callbacks) =>
  (value) =>
    callbacks.reduce((prev, cb) => cb(prev), value);

export const createTranslator =
  (translator) =>
  (word, ...props) =>
    word && typeof word === "string"
      ? props.length > 0
        ? () => translator(lowerCase(trim(word)), ...(props || []))
        : chain(lowerCase, trim, translator)(word) ??
          chain(lowerCase, trim)(word)
      : word;

export const t = createTranslator(originalTranslate);

export const useTranslation = () => {
  const { t: translate } = useOriginalTranslation();
  return {
    t: createTranslator(translate),
  };
};
