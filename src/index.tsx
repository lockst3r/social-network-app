import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// components
import App from "./App";
import ThemeProvider from "./theme/ThemeProvider";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
