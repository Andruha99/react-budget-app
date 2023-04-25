import React from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../../context/ExensesContext/ExpensesContext";
import { OverSpendingCard, RemainingCard } from "./styles";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const RemainCard = () => {
  const { budget } = useBudgetContext();
  const { currency } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const remain = budget - expenses.reduce((spend, expense) => spend + Number(expense.cost), 0);

  return (
    <>
      {remain >= 0 ? (
        <RemainingCard>
          Remaining: {currency.value}
          {remain}
        </RemainingCard>
      ) : (
        <OverSpendingCard>
          Overspanding by {currency.value}
          {Math.abs(remain)}
        </OverSpendingCard>
      )}
    </>
  );
};
