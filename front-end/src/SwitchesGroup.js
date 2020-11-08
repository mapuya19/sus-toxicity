import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import Button from "@material-ui/core/Button";

function SwitchesGroup() {
  const [state, setState] = React.useState({
    extroverted: false,
    agreeable: false,
    conscientious: false,
    openness: false,
    riceScore: 100,
    twitterName: "realDonaldTrump",
  });

  const arrayStates = [
    state.extroverted,
    state.agreeable,
    state.conscientious,
    state.openness,
    state.riceScore,
    state.twitterName,
  ];

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const updateField = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const [message, setMessage] = React.useState({
    theMessage: "",
  });

  async function getTheMessage() {
    var message = await generateText(await getResults(arrayStates));
    setMessage(message);
    handleClickOpen();
  }

  return (
    <div className="container">
      <div className="formControl">
        <FormControl component="fieldset">
          <FormLabel component="legend">Is your friend...</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={state.extroverted}
                  onChange={handleChange}
                  name="extroverted"
                />
              }
              label="Extroverted?"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state.agreeable}
                  onChange={handleChange}
                  name="agreeable"
                />
              }
              label="Agreeable?"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state.conscientious}
                  onChange={handleChange}
                  name="conscientious"
                />
              }
              label="Conscientious?"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state.openness}
                  onChange={handleChange}
                  name="openness"
                />
              }
              label="Open to new experiences?"
            />
            <TextField
              required
              id="filled-required"
              label="Rice Score"
              defaultValue="100"
              variant="filled"
              name="riceScore"
              value={state.value}
              onChange={updateField}
            />
            <TextField
              required
              id="filled-helperText"
              label="Twitter Username"
              defaultValue="realDonaldTrump"
              variant="filled"
              name="twitterName"
              value={state.value}
              onChange={updateField}
            />
          </FormGroup>
        </FormControl>
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={() => getTheMessage()}
      >
        Check results!
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Results
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h3" gutterBottom>
            {message + "!"}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

async function generateText(theScore) {
  var messageReturn = "";

  let judgeScore = await theScore;

  if (judgeScore <= 25) {
    messageReturn = "ULTRA SUS";
  }

  if (25 < judgeScore && judgeScore < 45) {
    messageReturn = "Very sus";
  }

  if (45 <= judgeScore && judgeScore < 75) {
    messageReturn = "Moderately sus";
  }

  if (75 <= judgeScore && judgeScore <= 90) {
    messageReturn = "A bit sus";
  }

  if (judgeScore > 90) {
    messageReturn = "Pure";
  }

  // console.log("judgeScore: " + judgeScore);
  return messageReturn;
}

async function getResults(formData) {
  const formVars = await formData;
  var tweetToPass = await getTweet(formVars[5]);
  var tweetScore = await getToxicity(tweetToPass);

  var riceScore = formVars[4];

  var score = 100;
  var TempTweetScore = tweetScore;

  if (formVars[0] === false) {
    score = score - 10;
  }

  if (formVars[1] === false) {
    score = score - 10;
  }

  if (formVars[2] === false) {
    score = score - 10;
  }

  if (formVars[3] === false) {
    score = score - 10;
  }

  if (tweetScore >= 0.8) {
    score = score - 80;
  }

  if (0.5 < tweetScore && tweetScore < 0.8) {
    score = score - 50;
  }

  if (riceScore < 20) {
    score = score - 40;
  }

  if (20 <= riceScore && riceScore < 40) {
    score = score - 30;
  }

  if (40 <= riceScore && riceScore < 70) {
    score = score - 20;
  }

  if (70 <= riceScore && riceScore < 85) {
    score = score - 10;
  }

  // console.log("tweetScore: " + tweetScore);

  console.log("finalScore: " + score);
  return score;
}

async function getTweet(userName) {
  const user = userName;

  const twitter_api = `http://localhost:8000/getTweets/${user}`;
  const response = await fetch(twitter_api);
  const data = await response.json();

  let tweetText = data[0].text;

  return tweetText;
}

async function getToxicity(tweetPassed) {
  let toxicData = await fetch("http://localhost:5000/model/predict", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: [`${tweetPassed}`],
    }),
  });

  const data = await toxicData.json();

  let newScore = data.results[0].predictions.toxic;
  return newScore;
}

export default SwitchesGroup;
