import { ReactNode, createContext, useContext, useState } from "react";
import { ExpenseItemProps } from "../../types";

interface ExpensesContextState {
    expenses: ExpenseItemProps[];
    deleteExpense: (id: number) => void;
    addExpense: (expense: ExpenseItemProps) => void
}

interface ExpensesContextProviderProps {
    children: ReactNode;
}

const ExpensesContext = createContext<ExpensesContextState>({} as ExpensesContextState);

const useExpensesContextValue = () => {
    const [expensesValue, setExpensesValue] = useState<ExpensesContextState>(() => {
        return {
            expenses: [],
            deleteExpense: (id: number) => {
                setExpensesValue((context) => ({
                    ...context, 
                    expenses: context.expenses.filter((exp) => exp.id !== id),
                }));
            },
            addExpense: (expense: ExpenseItemProps) => {
                setExpensesValue((context) => ({
                    ...context,
                    expenses: [...context.expenses, expense],
                }))
            }
        };
    });

    return expensesValue;
}

export const useExpensesContext = () => useContext(ExpensesContext);

export const ExpensesContextProvider = ({ children }: ExpensesContextProviderProps) => {
    return <ExpensesContext.Provider value={useExpensesContextValue()}>{children}</ExpensesContext.Provider>;
}