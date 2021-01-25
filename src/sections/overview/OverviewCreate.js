import React from "react";
import { Create } from "react-admin";
import OverviewCreateForm from "./OverviewCreateForm";

class OverviewCreate extends React.Component {
  render() {
    return (
      <Create {...this.props} title="Create Activity">
        <OverviewCreateForm />
      </Create>
    );
  }
}

export default OverviewCreate;
