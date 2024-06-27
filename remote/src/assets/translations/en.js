const en = {
  Welcome: "Welcome",
  "Log in to your account": "Log in to your account",
  "Continue as": "Continue as",
  "Sign in as a different user": "Sign in as a different user",
  Email: "Email",
  Password: "Password",
  "Forgot password": "Forgot password",
  "Log in": "Log in",
  "Connect with Google": "Connect with Google",
  "Don't have an account": "Don't have an account",
  "Sign up": "Sign up",
  "Email is required": "Email is required",
  "Password is required": "Password is required",
  "Invalid email address": "Invalid email address",
};

const normalizedEn = Object.entries(en).reduce((dict, [key, value]) => {
  const prev = dict;
  prev[key.toLowerCase()] = value;
  return prev;
}, {});

export default normalizedEn;
