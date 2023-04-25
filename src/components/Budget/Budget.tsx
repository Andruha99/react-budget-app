import React from "react";
import { BudgetCard } from "../BudgetCard/BudgetCard";
import { RemainCard } from "../RemainingCard/RemainCard";
import { SpendCard } from "../SpendCard/SpendCard";
import { BudgetHeader, BudgetWrap } from "./styles";
import { CustomSelect } from "../CustomSelect/CustomSelect";

export const Budget = () => {
  return (
    <BudgetWrap>
      <BudgetHeader>
        <h2>Budget App</h2>
        <CustomSelect />
      </BudgetHeader>
      <BudgetCard />
      <RemainCard />
      <SpendCard />
    </BudgetWrap>
  );
};
