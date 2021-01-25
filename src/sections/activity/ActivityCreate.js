import React from "react";
import { Create } from "react-admin";
import ActivityCreateForm from "./ActivityCreateForm";

class ActivityCreate extends React.Component {
  render() {
    return (
      <Create {...this.props} title="Create Activity">
        <ActivityCreateForm />
      </Create>
    );
  }
}

export default ActivityCreate;
