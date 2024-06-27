import {
  Col,
  Form,
  InputGroupProps as BootstrapInputGroupProps,
} from "react-bootstrap";
import classnames from "classnames";
import { useMemo } from "react";
import { FormikProps, getIn } from "formik";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./index.module.scss";
import { types as inputTypes } from "../Inputs/types.ts";
import Inputs from "../Inputs/index.ts";

type InputGroupComponentProps = Omit<BootstrapInputGroupProps, "as"> & {
  as: string;
  xs?: number;
  label?: string;
  groupClassNames?: string[];
  labelClassNames?: string[];
  fieldClassNames?: string[];
  name: string;
  testId?: string;
  hasLabel?: boolean;
  onChange?: (arg: any) => void;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  inputAriaLabel?: string;
  ariaLabel?: string;
  formik: FormikProps<any>;
  customError?: string;
  shouldUseTranslation?: boolean;
};

type InputGroupProps = Omit<InputGroupComponentProps, "as">;

function InputGroupComponent({
  xs,
  as,
  label,
  groupClassNames = [],
  labelClassNames = [],
  fieldClassNames = [],
  formik,
  name,
  testId,
  hasLabel = true,
  onChange,
  required = false,
  disabled = false,
  style,
  placeholder,
  ariaLabel,
  inputAriaLabel,
  customError,
  shouldUseTranslation = true,
  ...props
}: InputGroupComponentProps) {
  const { t } = useTranslation();
  const [InputType] = useMemo(() => {
    return [Inputs[as]];
  }, [as]);
  const value = getIn(formik.values, name);
  const error = getIn(formik.errors, name);
  return (
    <Form.Group
      data-testid={testId ? testId : label?.toLowerCase().split(" ").join("-")}
      as={Col}
      xs={xs}
      className={classnames(styles.group, ...(groupClassNames || []))}
      style={style}
    >
      {label && hasLabel && (
        <Form.Label
          className={classnames(styles.label, ...(labelClassNames || []))}
          data-testid="label"
        >
          {shouldUseTranslation ? t(label) : label}
          {required && !disabled && (
            <span
              data-testid="required-flag"
              className={classnames("h5", {
                "text-danger": error,
              })}
            >
              *
            </span>
          )}
        </Form.Label>
      )}
      <InputType
        value={value}
        name={name}
        classNames={[styles.field, ...(fieldClassNames || [])]}
        isInvalid={!!error}
        onChange={disabled ? () => {} : onChange || formik.handleChange}
        formik={formik}
        data-testid={testId ? `${testId}-input` : `input`}
        disabled={disabled}
        placeholder={t(placeholder)}
        aria-label={inputAriaLabel ?? name}
        {...props}
      />
      {customError && !error ? (
        <Form.Text className={classnames(styles.desc, "text-muted")}>
          {t(customError)}
        </Form.Text>
      ) : (
        <Form.Control.Feedback
          data-testid="validation-feedback"
          type="invalid"
          style={{ display: error ? "block" : undefined }}
          role="alert"
          aria-label={ariaLabel}
        >
          {!!error && typeof error === "object"
            ? Object.values(error).map((errValue) => errValue)
            : t(error)}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

const types = {
  ...inputTypes,
};

const InputGroup: {
  [key: string]: string | ((props: InputGroupProps) => JSX.Element);
} = {
  ...types,
};

Object.keys(types).map((key: string) => {
  InputGroup[key] = (props: InputGroupProps) => (
    <InputGroupComponent as={key} {...props} />
  );
});

export default InputGroup;
