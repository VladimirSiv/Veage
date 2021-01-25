import {
  required,
  minLength,
  maxLength,
  email,
  regex,
  minValue,
  maxValue,
  number,
} from "react-admin";

const validate = {
  username: [required(), minLength(6), maxLength(15)],
  name: [required(), minLength(6), maxLength(15)],
  jobTitle: [required(), minLength(6), maxLength(15)],
  activityTitle: [required(), minLength(6), maxLength(15)],
  teamName: [required(), minLength(3), maxLength(8)],
  projectName: [required(), minLength(3), maxLength(8)],
  number: [required(), number(), minValue(1), maxValue(24)],
  password: regex(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Not Valid"
  ),
  email: email(),
  input: [required()],
};

export default validate;
