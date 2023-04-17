import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { StyledButton, StyledForm, StyledInput, Title, ErrorMessage } from "./styles";
import { useExpensesContext } from "../../context/ExensesContext/ExpensesContext";
import { v4 as uuidv4 } from "uuid";

interface FormValues {
  name: string;
  cost: string;
};

export const Form = () => {

  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm<FormValues>({});

  const { addExpense } = useExpensesContext();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addExpense({ ...data, id: uuidv4() });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Expense</Title>
      <StyledInput placeholder="enter name ..." type="text" {...register("name", {
        required: true,
        maxLength: { value: 15, message: "Max length of goods name is 15 letters"}
      })}/>
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

      <StyledInput placeholder="enter cost ..." type="number" {...register("cost", {
        required: true,
        valueAsNumber: true,
        maxLength: { value: 5, message: "Max price is 99999"}
      })}/>
      {errors.cost && <ErrorMessage>{errors.cost.message}</ErrorMessage>}

      <StyledButton type="submit">Done</StyledButton>
    </StyledForm>
  )
}
