import { ReactNode, createContext, useContext, useState } from "react";
import { Expense } from "../../types";

interface ExpensesContextState {
    expenses: Expense[];
    deleteExpense: (id: string) => void;
    addExpense: (expense: Expense) => void
}

interface ExpensesContextProviderProps {
    children: ReactNode;
}

const ExpensesContext = createContext<ExpensesContextState>({} as ExpensesContextState);

const useExpensesContextValue = () => {
    const [expensesValue, setExpensesValue] = useState<ExpensesContextState>(() => {
        return {
            expenses: [],
            deleteExpense: (id: string) => {
                setExpensesValue((context) => ({
                    ...context, 
                    expenses: context.expenses.filter((exp) => exp.id !== id),
                }));
            },
            addExpense: (expense: Expense) => {
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
    return <ExpensesContext.Provider value={useExpensesContextValue()}>
                {children}
            </ExpensesContext.Provider>;
}