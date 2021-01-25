import React from "react";
import {
  FormWithRedirect,
  TextInput,
  SaveButton,
  DeleteButton,
  SelectInput,
  NumberInput,
  useNotify,
  useRedirect,
  DateInput,
  ReferenceInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import { Typography, Box, Toolbar } from "@material-ui/core";
import validate from "../../utils/validations";

const OverviewCreateForm = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const onSuccess = () => {
    notify("Activity successfully created");
    redirect("list", props.basePath);
  };
  return (
    <FormWithRedirect
      {...props}
      render={(formProps) => (
        <form>
          <Box p="1em">
            <Box display="flex" flexDirection="column">
              <Box flex={1} mr="1em">
                <Typography variant="h6" gutterBottom>
                  User
                </Typography>
                <Box display="flex">
                  <ReferenceInput
                    label="User"
                    source="userId"
                    reference="users"
                    // TODO check if there's another way to get data
                    perPage={100}
                  >
                    <SelectInput
                      source="userId"
                      optionText="username"
                      validate={validate.input}
                    />
                  </ReferenceInput>
                </Box>
              </Box>
              <Box flex={1} mr="1em">
                <Typography variant="h6" gutterBottom>
                  Activity Details
                </Typography>
                <Box display="flex">
                  <Box mr="0.5em">
                    <TextInput
                      source="title"
                      label="Title"
                      resettable
                      validate={validate.activityTitle}
                    />
                  </Box>
                  <Box ml="0.5em" mr="0.5em">
                    <ReferenceInput
                      label="Project"
                      source="projectId"
                      reference="projects"
                    >
                      <SelectInput
                        source="projectId"
                        optionText="name"
                        validate={validate.input}
                      />
                    </ReferenceInput>
                  </Box>
                  <Box ml="0.5em" mr="0.5em">
                    <ReferenceInput
                      label="Type"
                      source="typeId"
                      reference="types"
                    >
                      <SelectInput
                        optionText="name"
                        source="typeId"
                        validate={validate.input}
                      />
                    </ReferenceInput>
                  </Box>
                  <Box ml="0.5em" mr="0.5em">
                    <NumberInput
                      source="hours"
                      label="Hours"
                      type="number"
                      validate={validate.number}
                    />
                  </Box>
                  <Box ml="0.5em" mr="0.5em">
                    <DateInput
                      source="date"
                      label="Date"
                      type="date"
                      defaultValue={new Date()}
                    />
                  </Box>
                </Box>
                <Typography variant="h6" gutterBottom>
                  Description
                </Typography>
                <Box alignSelf="flex-end">
                  <RichTextInput source="description" label="" required />
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

export default OverviewCreateForm;
