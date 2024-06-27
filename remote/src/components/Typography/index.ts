import Paragraph from "./Paragaraph";
import Span from "./Span";
import Title from "./Title";

const types = {
  Title: "Title",
  Paragraph: "Paragraph",
  Span: "Span",
};

const Typography = {
  [types.Title]: Title,
  [types.Paragraph]: Paragraph,
  [types.Span]: Span,
};

export default Typography;
