import { Form, type FormControlProps } from "react-bootstrap";
import classnames from "classnames";

type PasswordProps = FormControlProps & {
  classNames: string[];
  name: string;
};

function Password({
  name,
  onChange,
  value,
  isInvalid,
  classNames,
  ...props
}: PasswordProps) {
  return (
    <Form.Control
      type="password"
      name={name}
      value={value}
      autoComplete="new-password"
      onChange={onChange}
      isInvalid={isInvalid}
      className={classnames(...(classNames || []))}
      {...props}
    />
  );
}

export default Password;
