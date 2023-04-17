import React from "react";
import { useExpensesContext } from "../../context/ExensesContext/ExpensesContext";
import { Expense } from "../../types";
import { Badge } from "../Badge/Badge";
import { ExpensesItemWrapper } from "./styles";

interface ExpenseItemProps {
    expense: Expense;
}

export const ExpensesItem = ({ expense }: ExpenseItemProps) => {
    const { deleteExpense } = useExpensesContext();
    return (
        <ExpensesItemWrapper>
            <p>Name: {expense.name}</p>
            <div>
                <Badge cost={expense.cost} />
                <button onClick={() => deleteExpense(expense.id)}>X</button> 
            </div> 
            
        </ExpensesItemWrapper>
    )
}
