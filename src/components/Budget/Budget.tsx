import React from "react";
import { BudgetCard } from "../BudgetCard/BudgetCard";
import { RemainCard } from "../RemainingCard/RemainCard";
import { SpendCard } from "../SpendCard/SpendCard";
import { BudgetWrap } from "./styles";

export const Budget = () => {
  return (
    <BudgetWrap>
      <BudgetCard />
      <RemainCard />
      <SpendCard />
    </BudgetWrap>
  );
};
