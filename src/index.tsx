import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import FontStyles from "./fontStyles";
import theme from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <FontStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
