import React from "react";
import {
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import Box from "@material-ui/core/Box";
import validate from "../../utils/validations";

class OverviewEdit extends React.Component {
  render() {
    return (
      <Edit title="Edit Activity" {...this.props}>
        <SimpleForm>
          <EditSection />
        </SimpleForm>
      </Edit>
    );
  }
}

const EditSection = ({ basePath, record, ...props }) => {
  return (
    <Box p="1em">
      <Box display="flex" flexDirection="row">
        <Box display="flex" ml="0.5em" mr="0.5em">
          <TextInput source="User.username" label="Username" disabled />
        </Box>
        <Box display="flex" ml="0.5em" mr="0.5em">
          <TextInput source="title" label="Title" disabled />
        </Box>
        <Box display="flex" ml="0.5em" mr="0.5em">
          <ReferenceInput
            label="Project"
            source="projectId"
            reference="projects"
          >
            <SelectInput source="projectId" optionText="name" />
          </ReferenceInput>
        </Box>
        <Box display="flex" ml="0.5em" mr="0.5em">
          <ReferenceInput label="Type" source="typeId" reference="types">
            <SelectInput source="typeId" optionText="name" />
          </ReferenceInput>
        </Box>
        <Box display="flex" ml="0.5em" mr="0.5em">
          <NumberInput
            source="hours"
            label="Hours"
            type="number"
            validate={validate.number}
          />
        </Box>
        <Box display="flex" ml="0.5em" mr="0.5em">
          <DateInput source="date" />
        </Box>
      </Box>
      <Box alignSelf="flex-end">
        <RichTextInput source="description" label="" />
      </Box>
    </Box>
  );
};

export default OverviewEdit;
