import React from 'react'
import { useExpensesContext } from '../../context/ExensesContext/ExpensesContext'

export const ExpensesItem = () => {
    const { deleteExpense } = useExpensesContext();
    return (
        <div>ExpensesItem</div>
    )
}
