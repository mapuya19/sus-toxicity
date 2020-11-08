import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Button from "@material-ui/core/Button";

function SwitchesGroup() {
  const [state, setState] = React.useState({
    extraverted: false,
    agreeable: false,
    conscientious: false,
    openness: false,
  });

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
                  checked={state.extraverted}
                  onChange={handleChange}
                  name="extraverted"
                />
              }
              label="Extraverted"
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

      <Button variant="contained" color="primary" onClick={getResults}>
        Check results!
      </Button>
    </div>
  );
}

async function getResults() {
  console.log("this works");
}

export default SwitchesGroup;
