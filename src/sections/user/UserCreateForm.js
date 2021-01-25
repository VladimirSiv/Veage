import React from "react";
import {
  FormWithRedirect,
  DateInput,
  TextInput,
  SaveButton,
  DeleteButton,
  PasswordInput,
  SelectInput,
  ImageField,
  ImageInput,
  useNotify,
  useRedirect,
  ReferenceInput,
} from "react-admin";
import { Typography, Box, Toolbar } from "@material-ui/core";
import validate from "../../utils/validations";

const ROLES = [
  { id: 1, name: "Admin" },
  { id: 2, name: "Moderator" },
  { id: 3, name: "User" },
];

// TODO Fix upload component

const UserCreateForm = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const onSuccess = () => {
    notify("User successfully created");
    redirect("list", props.basePath);
  };
  return (
    <FormWithRedirect
      {...props}
      render={(formProps) => (
        <form>
          <Box p="1em">
            <ImageInput
              source="image"
              label="Profile Image"
              multiple={false}
              maxSize={5000000}
              accept=".png"
              mulitple={false}
            >
              <ImageField source="src" title="title" />
            </ImageInput>
            <Box display="flex">
              <Box flex={1} mr="1em">
                <Typography variant="h6" gutterBottom>
                  Credentials
                </Typography>
                <Box display="flex">
                  <Box mr="0.5em">
                    <TextInput
                      source="username"
                      label="Username"
                      validate={validate.username}
                    />
                  </Box>
                  <Box ml="0.5em">
                    <PasswordInput
                      source="password"
                      label="Password"
                      type="password"
                      validate={validate.password}
                    />
                  </Box>
                </Box>
                <Typography variant="h6" gutterBottom>
                  Role
                </Typography>
                <Box display="flex">
                  <Box>
                    <SelectInput
                      source="roleId"
                      label="Role"
                      choices={ROLES}
                      required
                    />
                  </Box>
                </Box>
                <Typography variant="h6" gutterBottom>
                  Details
                </Typography>
                <Box display="flex">
                  <Box mr="0.5em">
                    <TextInput
                      source="UserDetails.firstName"
                      label="First name"
                      validate={validate.name}
                    />
                  </Box>
                  <Box ml="0.5em">
                    <TextInput
                      source="UserDetails.lastName"
                      label="Last name"
                      validate={validate.name}
                    />
                  </Box>
                  <Box ml="0.5em">
                    <ReferenceInput
                      label="Team"
                      source="teamId"
                      reference="teams"
                    >
                      <SelectInput
                        source="teamId"
                        optionText="name"
                        validate={validate.input}
                      />
                    </ReferenceInput>
                  </Box>
                </Box>
                <Box>
                  <TextInput
                    source="UserDetails.email"
                    label="Email"
                    type="email"
                    validate={validate.email}
                  />
                </Box>
                <Box>
                  <TextInput
                    source="UserDetails.jobTitle"
                    label="Job Title"
                    validate={validate.jobTitle}
                  />
                </Box>
                <Box>
                  <DateInput source="UserDetails.birthday" label="Birthday" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Toolbar>
            <Box display="flex" justifyContent="space-between" width="100%">
              <SaveButton
                saving={formProps.saving}
                onSuccess={onSuccess}
                handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
              />
              <DeleteButton record={formProps.record} />
            </Box>
          </Toolbar>
        </form>
      )}
    />
  );
};

export default UserCreateForm;
