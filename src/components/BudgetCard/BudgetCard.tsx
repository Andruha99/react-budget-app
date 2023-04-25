import React from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useToggle } from "../../hooks/useToggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { BudgetButton, BudgetForm, BudgetInput, BudgetWrapper, Title } from "./styles";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

interface BudgetCardProps {
  budget: number;
}

export const BudgetCard = () => {
  const { budget, setBudget } = useBudgetContext();
  const { currency } = useCurrencyContext();
  const [isBudgetChanged, setIsBudgetChange] = useToggle(true);

  const { handleSubmit, register, reset } = useForm<BudgetCardProps>();

  const onSubmit: SubmitHandler<BudgetCardProps> = ({ budget }) => {
    setBudget(budget);
    reset();
    setIsBudgetChange();
  };

  return (
    <>
      {isBudgetChanged ? (
        <BudgetWrapper>
          <Title>
            Budget: {currency.value}
            {budget}
          </Title>
          <BudgetButton type="button" onClick={setIsBudgetChange}>
            Edit
          </BudgetButton>
        </BudgetWrapper>
      ) : (
        <BudgetWrapper>
          <BudgetForm onSubmit={handleSubmit(onSubmit)}>
            <BudgetInput type="number" placeholder="Enter  budget ..." {...register("budget")} />
            <BudgetButton type="submit">Save</BudgetButton>
          </BudgetForm>
        </BudgetWrapper>
      )}
    </>
  );
};
