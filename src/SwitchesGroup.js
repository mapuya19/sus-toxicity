import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Button from "@material-ui/core/Button";

function SwitchesGroup() {
  const [state, setState] = React.useState({
    extroverted: false,
    agreeable: false,
    conscientious: false,
    openness: false,
  });

  const arrayStates = [
    state.extroverted,
    state.agreeable,
    state.conscientious,
    state.openness,
  ];

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="container">
      <div className="formControl">
        <FormControl component="fieldset">
          <FormLabel component="legend">
            What traits does your friend have?
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={state.extroverted}
                  onChange={handleChange}
                  name="extroverted"
                />
              }
              label="Extroverted"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state.agreeable}
                  onChange={handleChange}
                  name="agreeable"
                />
              }
              label="Agreeable"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state.conscientious}
                  onChange={handleChange}
                  name="conscientious"
                />
              }
              label="Conscientious"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state.openness}
                  onChange={handleChange}
                  name="openness"
                />
              }
              label="Open to new experiences"
            />
          </FormGroup>
        </FormControl>
      </div>

      <Button variant="contained" color="primary" onClick={() => getResults(arrayStates)}>
        Check results!
      </Button>
    </div>
  );
}

async function getResults(formData) {
  const vars = await formData;

  console.log(vars[0], vars[1], vars[2], vars[3]);
}

export default SwitchesGroup;
