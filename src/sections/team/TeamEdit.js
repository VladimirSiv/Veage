import React from "react";
import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";

const TeamEdit = (props) => {
  return (
    <Edit title="Edit Project" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" resettable />
        <RichTextInput disabled source="description" />
        <DateInput disabled source="createdAt" />
        <DateInput disabled source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};

export default TeamEdit;
