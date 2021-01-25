import React from "react";
import Chip from "@material-ui/core/Chip";

// TODO move these colors to the Theme

const activeStyle = {
  backgroundColor: "#c8e6c980",
  color: "#236325",
};

const inactiveStyle = {
  backgroundColor: "#ffcdd280",
  color: "#ba1c1c",
};

class ProjectChip extends React.Component {
  render() {
    return (
      // TODO check this... refactor
      <>
        {this.props.record && this.props.record.Project ? (
          <Chip
            style={
              this.props.record.Project.disabled ? inactiveStyle : activeStyle
            }
            label={this.props.record.Project.name}
          />
        ) : null}
      </>
    );
  }
}

export default ProjectChip;
