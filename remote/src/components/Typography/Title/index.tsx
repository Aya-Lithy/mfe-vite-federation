import classnames from "classnames";
import { useTranslation } from "../../../hooks/useTranslation";

type TitleProps = {
  title: string;
  classNames: string[];
  escapeTranslation: boolean;
};

function Title({ title, classNames, escapeTranslation = false }: TitleProps) {
  const { t } = useTranslation();
  return (
    <h1 className={classnames(...(classNames || []))} data-testid="title">
      {escapeTranslation ? title : t(title)}
    </h1>
  );
}

export default Title;
