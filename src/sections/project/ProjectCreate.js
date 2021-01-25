import React from "react";
import {
  Create,
  SimpleForm,
  useNotify,
  useRedirect,
  TextInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import validate from "../../utils/validations";

const ProjectCreate = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const onSuccess = () => {
    notify("Project successfully created");
    redirect("list", props.basePath);
  };

  return (
    <Create {...props} onSuccess={onSuccess}>
      <SimpleForm>
        <TextInput source="name" resettable validate={validate.projectName} />
        <RichTextInput source="description" label="Description" />
      </SimpleForm>
    </Create>
  );
};

export default ProjectCreate;
