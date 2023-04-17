import { useExpensesContext } from "../../context/ExensesContext/ExpensesContext";
import { Expense } from "../../types";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";

interface ExpensesListProps {
    filterExpences: string;
}

export const ExpensesList = ({ filterExpences }: ExpensesListProps) => {
    const { expenses } = useExpensesContext();

    const filterData = expenses.filter((expense) => {
        return expense.name.toLowerCase().includes(filterExpences)
    })
    
    return (
        <div>
            {filterData.map((expense) => {
                return <ExpensesItem expense={expense} key={expense.id}/>
            })}
        </div>
    )
}
