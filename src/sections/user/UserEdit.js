import React from "react";
import {
  Edit,
  PasswordInput,
  TextInput,
  SimpleForm,
  DateInput,
  BooleanInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { AvatarPreview } from "../../components";
import Box from "@material-ui/core/Box";
import validate from "../../utils/validations";

const UserEdit = (props) => {
  return (
    <Edit {...props} title={"Edit User"}>
      <SimpleForm>
        <EditSection />
      </SimpleForm>
    </Edit>
  );
};

const EditSection = ({ basePath, projects, record, ...props }) => {
  return (
    <Box p="1em">
      <Box display="flex" ml="0.5em" mr="0.5em">
        <Box display="flex" ml="0.5em" mr="0.5em">
          <AvatarPreview
            {...record}
            src="UserDetail.image"
            style={{ height: "200px", width: "200px" }}
          />
        </Box>
        <Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Box display="flex" ml="0.5em" mr="0.5em">
              <TextInput source="username" validate={validate.username} />
            </Box>
            <Box display="flex" ml="0.5em" mr="0.5em">
              <PasswordInput
                source="password"
                label="Password"
                type="password"
                validate={validate.password}
                required
              />
            </Box>
            <Box display="flex" ml="0.5em" mr="0.5em">
              <BooleanInput source="disabled" label="Disable" />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row">
            <Box display="flex" ml="0.5em" mr="0.5em">
              <TextInput
                source="UserDetail.firstName"
                label="First Name"
                validate={validate.name}
              />
            </Box>
            <Box display="flex" ml="0.5em" mr="0.5em">
              <TextInput
                source="UserDetail.lastName"
                label="Last Name"
                validate={validate.name}
              />
            </Box>
            <Box display="flex" ml="0.5em" mr="0.5em">
              <TextInput
                source="UserDetail.jobTitle"
                label="Job Title"
                validate={validate.jobTitle}
              />
            </Box>
            <Box display="flex" ml="0.5em" mr="0.5em">
              <ReferenceInput label="Team" source="teamId" reference="teams">
                <SelectInput source="teamId" validate={validate.input} />
              </ReferenceInput>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row">
            <Box display="flex" ml="0.5em" mr="0.5em">
              <TextInput
                source="UserDetail.email"
                label="Email"
                type="email"
                validate={validate.email}
              />
            </Box>
            <Box display="flex" ml="0.5em" mr="0.5em">
              <DateInput source="UserDetail.birthday" label="Birthday" />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row">
            <Box display="flex" ml="0.5em" mr="0.5em">
              <DateInput source="createdAt" disabled label="Created At" />
            </Box>
            <Box display="flex" ml="0.5em" mr="0.5em">
              <DateInput source="updatedAt" disabled label="Updated At" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default UserEdit;
