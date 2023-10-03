import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// providers
import { ThemeProvider } from "app/providers/theme-provider";
// components
import App from "./app/App";



render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
