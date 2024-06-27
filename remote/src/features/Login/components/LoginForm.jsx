import React from "react";
import { Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";

import Button from "src/components/Button";
import InputGroup from "src/components/InputGroup";

import { useTranslation } from "src/hooks/useTranslation";

import styles from "./LoginForm.module.scss";

const LoginForm = ({
  isLoading,
  formik,
  handleGoogleConnect,
  isNewSignin,
  user,
  continueAs,
  newSignIn,
}) => {
  const hasAcc = !!user;
  const fullname = `${user?.attributes?.given_name || ""} ${
    user?.attributes?.family_name || ""
  }`;
  const isContinueAsScreenShown = !isNewSignin && hasAcc;
  const { handleSubmit, handleChange, values } = formik || {};

  const { t } = useTranslation();

  return (
    <Form
      className={classnames(styles.form, {
        [styles.continueAsScreen]: isContinueAsScreenShown,
      })}
      onSubmit={handleSubmit}
      data-testid="login-form"
    >
      <fieldset disabled={isLoading}>
        {(isNewSignin || !hasAcc) && (
          <Form.Group data-testid="form-header">
            <Form.Label className={styles.header}>{t("Welcome")}</Form.Label>

            <Form.Text className={styles.desc}>
              {t("Log in to your account")}
            </Form.Text>
          </Form.Group>
        )}

        {isContinueAsScreenShown && (
          <Form.Group
            className={styles.signInWithAnotherUser}
            data-testid="signed-in"
          >
            <Button
              variant="primary"
              onClick={continueAs}
              block
              className={styles.continueBtn}
            >
              {t("Continue as")}{" "}
              {!isLoading ? (
                fullname
              ) : (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
            </Button>

            <Form.Text onClick={newSignIn}>
              {t("Sign in as a different user")}?
            </Form.Text>
          </Form.Group>
        )}

        {(isNewSignin || !hasAcc) && (
          <>
            <InputGroup.Text
              formik={formik}
              label="Email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={values?.email}
              className={styles.input}
              groupClassNames={[styles.field]}
              testId="email"
              required
            />

            <InputGroup.Text
              formik={formik}
              type="password"
              label="Password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              className={styles.input}
              groupClassNames={[styles.field]}
              testId="password"
              required
            />

            <Link
              to={"/forgot-password"}
              className={styles.forgotPassword}
              data-testid="forgot-password"
            >
              {t("Forgot password")}?
            </Link>

            <Button variant="primary" type="submit" data-testid="submit">
              {isLoading && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              {t("Log in")}
            </Button>

            <Button
              className={styles.connectGoogle}
              type="button"
              block
              onClick={handleGoogleConnect}
              data-testid="login-with-google"
            >
              Connect with Google
            </Button>

            <Form.Group className={styles.signUpGroup} data-testid="signup">
              <Form.Label>{t("Don't have an account")}?</Form.Label>
              <Link to={"/signup"}>{t("Sign up")}</Link>
            </Form.Group>
          </>
        )}
      </fieldset>
    </Form>
  );
};

export default LoginForm;
