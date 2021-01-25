import React from "react";
import {
  Edit,
  TextInput,
  SimpleForm,
  required,
  SaveButton,
  Toolbar,
  translate,
  BooleanInput,
} from "react-admin";
import Button from "@material-ui/core/Button";

const TypeEditToolbar = translate(({ onCancel, translate, ...props }) => (
  <Toolbar {...props}>
    <SaveButton />
    <Button onClick={onCancel}>{translate("ra.action.cancel")}</Button>
  </Toolbar>
));

const TypeEdit = ({ onCancel, ...props }) => (
  <Edit title=" " {...props}>
    <SimpleForm toolbar={<TypeEditToolbar onCancel={onCancel} />}>
      <TextInput source="name" validate={required()} />
      <BooleanInput source="disabled" label="Disable" />
    </SimpleForm>
  </Edit>
);

export default TypeEdit;
