import Yup from "src/lib/Yup";

const schema = Yup.object({
  email: Yup.string().label("Email").email().required(),
  password: Yup.string().label("Password").required(),
});

export default schema;
