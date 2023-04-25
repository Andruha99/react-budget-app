import React from "react";
import { useExpensesContext } from "../../context/ExensesContext/ExpensesContext";
import { SpentSoFar } from "./styles";

export const SpendCard = () => {
  const { expenses } = useExpensesContext();
  const totalSpend = expenses.reduce((spent, expenses) => spent + Number(expenses.cost), 0);
  return <SpentSoFar>Spent so far: {totalSpend}</SpentSoFar>;
};
