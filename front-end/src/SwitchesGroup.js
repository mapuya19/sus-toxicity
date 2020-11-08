import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

function SwitchesGroup() {
  const [state, setState] = React.useState({
    extroverted: false,
    agreeable: false,
    conscientious: false,
    openness: false,
    riceScore: 100,
    twitterScore: "",
  });

  const arrayStates = [
    state.extroverted,
    state.agreeable,
    state.conscientious,
    state.openness,
    state.riceScore,
    state.twitterScore,
  ];

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const updateField = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
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
            <TextField
              required
              id="filled-required"
              label="Rice Score"
              defaultValue=""
              variant="filled"
              name="riceScore"
              value={state.value}
              onChange={updateField}
            />
            <TextField
              required
              id="filled-helperText"
              label="Twitter Username"
              defaultValue=""
              variant="filled"
              name="twitterScore"
              value={state.value}
              onChange={updateField}
            />
          </FormGroup>
        </FormControl>
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={() => getResults(arrayStates)}
      >
        Check results!
      </Button>
    </div>
  );
}

async function getResults(formData) {
  const formVars = await formData;

  var score = 0;
  var finalScore = 0;
  var riceScoreCheck = 0;

  if (formVars[0] === true) {
    score = score + 1;
  }

  if (formVars[1] === true) {
    score = score + 1;
  }

  if (formVars[2] === true) {
    score = score + 1;
  }

  if (formVars[3] === true) {
    score = score + 1;
  }

  riceScoreCheck = (100 - formVars[4]) / 100;
  score = score + riceScoreCheck;

  finalScore = (score / 5) * 100;

  console.log(formVars[5]);
  console.log(finalScore);
}

export default SwitchesGroup;