import { Form, type FormControlProps } from "react-bootstrap";
import classnames from "classnames";
import { forwardRef } from "react";
import styles from "./index.module.scss";

type TextProps = Omit<FormControlProps, "value"> & {
  classNames: string[];
  value: string;
  name: string;
};

const Text = forwardRef(
  (
    {
      name,
      value,
      onChange,
      isInvalid,
      disabled,
      classNames,
      isValid,
      ...props
    }: TextProps,
    ref
  ) => {
    return (
      <Form.Control
        data-testid="text"
        type="text"
        name={name}
        isValid={isValid}
        value={value || ""}
        onChange={onChange}
        isInvalid={isInvalid}
        disabled={disabled}
        className={classnames(
          { [styles.trim]: disabled },
          ...(classNames || [])
        )}
        ref={ref}
        title={disabled ? value : ""}
        {...props}
      />
    );
  }
);

export default Text;
