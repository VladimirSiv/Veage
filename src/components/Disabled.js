import { TextField } from "react-admin";
import CheckIcon from "@material-ui/icons/Check";
import BlockIcon from "@material-ui/icons/Block";

const Disabled = (props) => {
  if (props.record) {
    return props.record.disabled ? (
      <BlockIcon style={{ fill: "red" }} />
    ) : (
      <CheckIcon style={{ fill: "green" }} />
    );
  } else {
    return null;
  }
};
Disabled.defaultProps = TextField.defaultProps;

export default Disabled;
