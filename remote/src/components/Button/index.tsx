import {
  default as BootStrapButton,
  ButtonProps as BootstrapButton,
} from "react-bootstrap/Button";
import classnames from "classnames";
import styles from "./index.module.scss";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "../../hooks/useTranslation";

type ButtonProps = BootstrapButton & {
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
  escapeTranslation?: boolean;
};

function Button({
  className,
  children,
  isLoading,
  escapeTranslation = false,
  ...props
}: ButtonProps) {
  const { t } = useTranslation();

  return (
    <BootStrapButton
      {...props}
      className={classnames(styles["cw-button"], className)}
    >
      <span style={{ opacity: isLoading ? 0 : 1 }}>
        {typeof children === "string" && !escapeTranslation
          ? t(children)
          : children}
      </span>
      {isLoading && <Spinner className={styles.spinner} animation="border" />}
    </BootStrapButton>
  );
}

export default Button;
