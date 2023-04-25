import React from "react";
import { useExpensesContext } from "../../context/ExensesContext/ExpensesContext";
import { Expense } from "../../types/types";
import { Badge } from "../Badge/Badge";
import { DeleteButton, ExpenseName, ExpensesItemWrapper, ItemRightSide } from "./styles";

interface ExpenseItemProps {
  expense: Expense;
}

export const ExpensesItem = ({ expense }: ExpenseItemProps) => {
  const { deleteExpense } = useExpensesContext();
  return (
    <ExpensesItemWrapper>
      <ExpenseName>{expense.name}</ExpenseName>
      <ItemRightSide>
        <Badge cost={expense.cost} />
        <DeleteButton onClick={() => deleteExpense(expense.id)}>X</DeleteButton>
      </ItemRightSide>
    </ExpensesItemWrapper>
  );
};
