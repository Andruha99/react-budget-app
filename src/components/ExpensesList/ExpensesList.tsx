import { useExpensesContext } from '../../context/ExensesContext/ExpensesContext'
import { ExpensesItem } from '../ExpensesItem/ExpensesItem';

export const ExpensesList = () => {
    const { expenses } = useExpensesContext();
    return (
        <div>
            {expenses.map((expense) => {
                return <ExpensesItem />
            })}
        </div>
    )
}
