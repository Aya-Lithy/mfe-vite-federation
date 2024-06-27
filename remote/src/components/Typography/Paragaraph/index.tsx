import classnames from "classnames";
import styles from "./index.module.scss";
import { useTranslation } from "../../../hooks/useTranslation";

type ParagraphProps = {
  body?: string;
  classNames?: string[];
  dynamicData?: {
    key: string;
    dynamicContent: string;
  };
};

const CapitalizedSentences = ({ body, dynamicData }: ParagraphProps) => {
  const { t } = useTranslation();

  return `${body}`.split(".").map((bodyEl, index) => {
    if (!bodyEl) return null;
    return (
      <p
        data-testid="paragraph-span"
        key={`${bodyEl}-${index}`}
        className={styles.subparagraph}
      >
        {dynamicData
          ? t(dynamicData.key, {
              dynamicContent: dynamicData.dynamicContent,
            })
          : t(body)}
      </p>
    );
  });
};

function Paragraph({ body, classNames, dynamicData }: ParagraphProps) {
  return (
    <p
      className={classnames(styles.paragraph, ...(classNames || []))}
      data-testid="paragraph"
    >
      <CapitalizedSentences body={body} dynamicData={dynamicData} />
    </p>
  );
}

export default Paragraph;
