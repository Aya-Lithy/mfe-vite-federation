import { useMemo } from "react";

type useDetectCurrentCountryProps = {
  value: string;
  country: string | number | undefined;
  HAS_NO_COUNTRY_FLAG: string;
  currentCountryByLocation: string;
};

export default function useShouldUpdateCountry({
  value,
  country,
  HAS_NO_COUNTRY_FLAG,
  currentCountryByLocation,
}: useDetectCurrentCountryProps) {
  return useMemo(() => {
    if (
      typeof value === "string" &&
      value.startsWith("+") &&
      country === HAS_NO_COUNTRY_FLAG
    )
      return true;

    if (
      typeof value === "string" &&
      !value.startsWith("+") &&
      country !== HAS_NO_COUNTRY_FLAG
    )
      return true;

    if (
      currentCountryByLocation &&
      country !== currentCountryByLocation &&
      (!value || typeof value === "undefined")
    )
      return true;

    return false;
  }, [country, value, currentCountryByLocation, HAS_NO_COUNTRY_FLAG]);
}
