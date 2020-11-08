import "./App.css";
import Header from "./Header";
import { Typography } from "@material-ui/core";
import SwitchesGroup from "./SwitchesGroup";

function App() {
  return (
    <div>
      <Header />
      <Typography>How likely is your friend to get COVID-19?</Typography>
      <div className="SwitchesGroup">
        <SwitchesGroup />
      </div>
    </div>
  );
}

export default App;
