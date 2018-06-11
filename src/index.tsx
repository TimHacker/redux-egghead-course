import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="Tim" />
    <h1>Count: 0</h1>
    <button>+</button>
    <button>-</button>
  </div>
);

render(<App />, document.getElementById("root"));
