import { ReactNode, createContext, useContext, useState } from "react";

interface BudgetContextState {
  budget: number;
  setBudget: (budget: number) => void;
}

interface BudgetContextProviderProps {
  children: ReactNode;
}

const BudgetContext = createContext<BudgetContextState>({} as BudgetContextState);

const useBudgetContextValue = () => {
  const [budgetValue, setBudgetValue] = useState<BudgetContextState>(() => {
    return {
      budget: 0,
      setBudget: (budget: number) => {
        setBudgetValue((context) => ({
          ...context,
          budget: Number(budget),
        }));
      },
    };
  });
  return budgetValue;
};

export const useBudgetContext = () => useContext(BudgetContext);

export const BudgetContextProvider = ({ children }: BudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};
