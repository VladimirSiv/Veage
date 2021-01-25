import React from "react";
import { Edit, SimpleForm, TextInput, BooleanInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";

const ProjectEdit = (props) => {
  return (
    <Edit title="Edit Project" {...props}>
      <SimpleForm>
        <TextInput source="name" resettable />
        <BooleanInput source="disabled" label="Disable" />
        <RichTextInput disabled source="description" />
      </SimpleForm>
    </Edit>
  );
};

export default ProjectEdit;
