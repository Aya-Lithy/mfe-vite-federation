import React, { useCallback, useState } from "react";
import { useFormik } from "formik";

import LoginForm from "./components/LoginForm";

import validationSchema from "./components/LoginForm.schema";

const urlQueries = new URLSearchParams(window.location.search);
const initialValues = {
  email: urlQueries.get("email")?.includes("@")
    ? urlQueries.get("email")?.replace(/\s/g, "+")
    : "",
  password: "",
};

const Screen = () => {
  const [isNewSignin, isNewSigninSet] = useState(false);

  const onSubmit = useCallback((values) => {
    console.log("login", values);
  }, []);

  const newSignIn = useCallback(() => {
    isNewSigninSet(true);
  }, [isNewSigninSet]);

  const formik = useFormik({
    onSubmit,
    validateOnChange: false,
    initialValues,
    validationSchema,
  });

  return (
    <LoginForm
      formik={formik}
      isNewSignin={isNewSignin}
      newSignIn={newSignIn}
    />
  );
};

export default Screen;
