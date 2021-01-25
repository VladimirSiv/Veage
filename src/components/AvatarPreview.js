import React from "react";
import { Avatar } from "@material-ui/core";
import parseJsonPath from "../utils/parseJsonPath";

const AvatarPreview = (props) => {
  return (
    <Avatar
      src={parseJsonPath(props.record ? props.record : props, props.src)}
      style={props.style}
    />
  );
};

export default AvatarPreview;
