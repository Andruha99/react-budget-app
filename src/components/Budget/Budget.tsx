import React from "react";
import { BudgetCard } from "../BudgetCard/BudgetCard";
import { RemainCard } from "../RemainingCard/RemainCard";

export const Budget = () => {
  return (
    <div>
      <BudgetCard />
      <RemainCard />
    </div>
  );
};
