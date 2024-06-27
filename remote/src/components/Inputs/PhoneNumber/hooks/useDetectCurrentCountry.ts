import { useEffect, useState } from "react";
import { getCountryForTimezone } from "countries-and-timezones";

export default function useDetectCurrentCountry() {
  const [currentCountry, setCurrentCountry] = useState("");
  useEffect(() => {
    const timezone = Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;
    const country = getCountryForTimezone(timezone)?.id?.toLowerCase();
    setCurrentCountry(country ? country : "us");
  }, []);

  return currentCountry;
}
