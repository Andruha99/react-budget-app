import React from "react";
import { useExpensesContext } from "../../context/ExensesContext/ExpensesContext";
import { SpentSoFar } from "./styles";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const SpendCard = () => {
  const { expenses } = useExpensesContext();
  const { currency } = useCurrencyContext();
  const totalSpend = expenses.reduce((spent, expenses) => spent + Number(expenses.cost), 0);
  return (
    <SpentSoFar>
      Spent so far: {currency.value}
      {totalSpend}
    </SpentSoFar>
  );
};
