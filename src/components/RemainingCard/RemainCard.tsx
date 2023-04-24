import React from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../../context/ExensesContext/ExpensesContext";
import { OverSpendingCard, RemainingCard } from "./styles";

export const RemainCard = () => {
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const remain = budget - expenses.reduce((spend, expense) => spend + Number(expense.cost), 0);

  return (
    <>
      {remain >= 0 ? (
        <RemainingCard>Remaining: {remain}</RemainingCard>
      ) : (
        <OverSpendingCard>Overspanding by {Math.abs(remain)}</OverSpendingCard>
      )}
    </>
  );
};
