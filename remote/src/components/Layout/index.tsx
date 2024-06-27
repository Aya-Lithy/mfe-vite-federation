import { Container, Row, Col } from "react-bootstrap";

import styles from "./index.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container
      className={styles.container}
      fluid
      data-testid="identity-container"
    >
      <Row className={styles.row}>
        <Col xs={12}>{children}</Col>
        <Col xs={12} className="text-center"></Col>
      </Row>
    </Container>
  );
};

export default Layout;
