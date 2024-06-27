import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: (field) => `${field.path} is required`,
  },
  string: { email: () => `Invalid email address` },
});

export default Yup;
