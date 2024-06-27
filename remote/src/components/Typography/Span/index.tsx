import classnames from "classnames";
import styles from "./index.module.scss";

type SpanProps = {
  span: string;
  classNames?: string[];
  capitalizeFirstLetter: boolean;
};

function Span({ span, classNames, capitalizeFirstLetter = true }: SpanProps) {
  return (
    <span
      data-testid="span"
      className={classnames(styles.span, ...(classNames || []), {
        [styles.captitalize]: capitalizeFirstLetter,
      })}
    >
      {span}
    </span>
  );
}

export default Span;
