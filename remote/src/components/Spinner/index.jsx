import React from "react";
import { Container, Spinner } from "react-bootstrap";

import styles from "./index.module.scss";

const PageSpinner = (props) => {
  if (!props.isShown) {
    return null;
  }

  const C = props.contained ? Container : React.Fragment;

  return (
    <C className={styles.container} style={props.style} fluid>
      <Spinner animation="border" />
    </C>
  );
};

export default PageSpinner;
