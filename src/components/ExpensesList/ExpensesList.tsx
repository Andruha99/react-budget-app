import { useExpensesContext } from "../../context/ExensesContext/ExpensesContext";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";

export const ExpensesList = () => {
    const { expenses } = useExpensesContext();
    console.log(expenses);
    return (
        <div>
            {expenses.map((expense) => {
                return <ExpensesItem expense={expense} key={expense.id}/>
            })}
        </div>
    )
}
