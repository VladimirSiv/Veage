import React from "react";
import { Create } from "react-admin";
import UserCreateForm from "./UserCreateForm";

class UserCreate extends React.Component {
  render() {
    return (
      <Create {...this.props}>
        <UserCreateForm />
      </Create>
    );
  }
}

export default UserCreate;
