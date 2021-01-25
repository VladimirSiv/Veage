import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const SelectForm = (props) => (
  <FormControl style={{ minWidth: 120 }}>
    <InputLabel htmlFor="select">{props.label}</InputLabel>
    <Select
      id="select"
      value={props.value}
      onChange={(e) => props.handleChange(e.target.value)}
    >
      {props.choices.map((choice) => (
        <MenuItem key={choice.id} value={choice.id}>
          {choice[props.text]}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectForm;
