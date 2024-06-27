// https://uxplanet.org/phone-number-field-design-best-practices-23957cbd86d5

import { useLayoutEffect, useMemo, useState } from "react";
import { FormikProps, getIn } from "formik";
import PhoneInput, {
  CountryData,
  type PhoneInputProps as ReactPhoneInputProps,
} from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";
import styles from "./index.module.scss";
import classnames from "classnames";
import useShouldUpdateCountry from "./hooks/useShouldUpdateCountry";
import useDetectCurrentCountry from "./hooks/useDetectCurrentCountry";

const defaultInputProps = {
  type: "tel",
  autoComplete: "tel-national",
  id: "courier-tel-input",
  "data-testid": "phone-number-input",
};

const HAS_NO_COUNTRY_FLAG = "has no country";

type PhoneInputControlProps = ReactPhoneInputProps & {
  formik: FormikProps<any>;
  name: string;
  containerClassNames?: string[];
  inputClassNames?: string[];
  enableCurrentLocation?: boolean;
  currentCountryByLocation?: string;
};

type PhoneInputProps = Omit<PhoneInputControlProps, "currentCountryByLocation">;

function PhoneNumberControl({
  formik,
  name,
  disabled = false,
  containerClassNames,
  inputClassNames,
  currentCountryByLocation = "",
  enableCurrentLocation = true,
  placeholder,
}: PhoneInputControlProps) {
  const error = getIn(formik.errors, name);
  const value = getIn(formik.values, name);
  const [country, setCountry] = useState<string | number | undefined>(
    undefined
  );
  const [isFocused, setIsFocused] = useState(false);

  const shouldUpdateCountry = useShouldUpdateCountry({
    value,
    country,
    HAS_NO_COUNTRY_FLAG,
    currentCountryByLocation,
  });

  useLayoutEffect(() => {
    const handleCountry = () => {
      if (
        currentCountryByLocation &&
        (!value || typeof value === "undefined")
      ) {
        setCountry(currentCountryByLocation);
        return;
      }

      if (typeof value === "string" && !value.startsWith("+")) {
        setCountry(HAS_NO_COUNTRY_FLAG);
        return;
      }

      if (typeof value === "string" && value.startsWith("+")) {
        setCountry(undefined);
      }
    };

    if (!isFocused && shouldUpdateCountry) {
      handleCountry();
    }
  }, [shouldUpdateCountry, isFocused, value, currentCountryByLocation]);

  const { setFieldValue } = formik;

  const onPhoneNumberChange = (
    _value: string,
    _country: CountryData,
    _: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => {
    const tempFormattedValue = formattedValue.replace(/[-\s()]/g, "");

    if (country === HAS_NO_COUNTRY_FLAG) setCountry(_country.countryCode);

    setFieldValue(name, tempFormattedValue);
  };

  const inputProps =
    country === HAS_NO_COUNTRY_FLAG
      ? {
          ...defaultInputProps,
          value,
        }
      : {
          ...defaultInputProps,
        };

  return !currentCountryByLocation && enableCurrentLocation ? null : (
    <PhoneInput
      // to force unmount and mount the component when country change to avoid crash caused by the lib
      key={country}
      preferredCountries={["us", "ca"]}
      data-testid="component-phone-number"
      containerClass={classnames(
        "intl-tel-input",
        styles.container,
        {
          "is-invalid": !!error,
        },
        {
          [styles.disabled]: disabled,
        },
        ...(containerClassNames || [])
      )}
      inputClass={classnames(
        "form-control",
        {
          "is-invalid": !!error,
        },
        ...(inputClassNames || [])
      )}
      inputProps={inputProps}
      disabled={disabled}
      enableSearch
      autoFormat
      countryCodeEditable={true}
      disableCountryCode={false}
      enableAreaCodes={true}
      searchPlaceholder="search country ..."
      dropdownStyle={{
        width:
          (document.getElementById("courier-tel-input")?.clientWidth || 0) + 1,
      }}
      country={country === HAS_NO_COUNTRY_FLAG ? undefined : country}
      value={country === HAS_NO_COUNTRY_FLAG ? undefined : value}
      onChange={onPhoneNumberChange}
      onFocus={() => {
        if (country === HAS_NO_COUNTRY_FLAG) setCountry(undefined);
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      placeholder={placeholder || ""}
    />
  );
}

export default function PhoneNumberInput({
  enableCurrentLocation = true,
  ...props
}: PhoneInputProps) {
  const currentCountryDetected = useDetectCurrentCountry();
  const currentCountryByLocation = useMemo(
    () => (enableCurrentLocation ? currentCountryDetected : ""),

    [enableCurrentLocation, currentCountryDetected]
  );
  return (
    <PhoneNumberControl
      currentCountryByLocation={currentCountryByLocation}
      enableCurrentLocation={enableCurrentLocation}
      {...props}
    />
  );
}
