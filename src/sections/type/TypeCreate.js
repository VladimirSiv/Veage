import React from "react";
import { Create, TextInput, SimpleForm } from "react-admin";

const TypeCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export default TypeCreate;
