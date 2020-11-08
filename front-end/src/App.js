import "./App.css";
import Header from "./Header";
import { Typography } from "@material-ui/core";
import SwitchesGroup from "./SwitchesGroup";

function App() {
  return (
    <div>
      <Header />
      <div className="Question">
        <Typography variant="h2" align="center">
          How sus is your friend?
        </Typography>
      </div>
      <div className="SwitchesGroup">
        <SwitchesGroup />
      </div>
    </div>
  );
}

export default App;
