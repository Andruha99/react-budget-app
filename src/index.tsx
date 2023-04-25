import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyles } from "./ui/GlobalStyles";
import { ExpensesContextProvider } from "./context/ExensesContext/ExpensesContext";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ExpensesContextProvider>
      <BudgetContextProvider>
        <CurrencyContextProvider>
          <GlobalStyles />
          <App />
        </CurrencyContextProvider>
      </BudgetContextProvider>
    </ExpensesContextProvider>
  </React.StrictMode>,
);
