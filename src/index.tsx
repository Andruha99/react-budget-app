import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyles } from "./ui/GlobalStyles";
import { ExpensesContextProvider } from "./context/ExensesContext/ExpensesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExpensesContextProvider>
      <GlobalStyles />
      <App />
    </ExpensesContextProvider>
  </React.StrictMode>
);
