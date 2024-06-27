import Password from "./Password";
import PhoneNumberInput from "./PhoneNumber";
import Text from "./Text";
import { types } from "./types";

const Inputs = {
  [types.PhoneNumber]: PhoneNumberInput,
  [types.Text]: Text,
  [types.Password]: Password,
};

export default Inputs;
