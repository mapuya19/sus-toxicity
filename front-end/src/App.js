import "./App.css";
import Header from "./Header";
import { Typography } from "@material-ui/core";
import SwitchesGroup from "./SwitchesGroup";

function App() {
  return (
    <div>
      <Header />
      <Typography>How sus is your friend?</Typography>
      <div className="SwitchesGroup">
        <SwitchesGroup />
      </div>
    </div>
  );
}

export default App;
