import typography from "./typography";
import components from "./components";
import breakpoints from "./breakpoints";
import transitions from "./transitions";
import Colors from "../../styles/colors";

const Theme: ITheme = {
  typography,
  components,
  breakpoints,
  transitions,
  background: {
    color: {
      primary: Colors.black,
      secondary: Colors.white
    }
  }
};

export default Theme;
