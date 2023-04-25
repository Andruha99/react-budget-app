import { useExpensesContext } from "../../context/ExensesContext/ExpensesContext";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import { EmptyExpense } from "./styles";

interface ExpensesListProps {
  filterExpences: string;
}

export const ExpensesList = ({ filterExpences }: ExpensesListProps) => {
  const { expenses } = useExpensesContext();

  const filterData = expenses.filter((expense) => {
    return expense.name.toLowerCase().includes(filterExpences);
  });

  return (
    <div>
      {filterData.length > 0 ? (
        filterData.map((expense) => {
          return <ExpensesItem expense={expense} key={expense.id} />;
        })
      ) : (
        <EmptyExpense>Oooops 🙈</EmptyExpense>
      )}
    </div>
  );
};
