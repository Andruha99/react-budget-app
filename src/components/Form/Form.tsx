import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { StyledButton, StyledForm, StyledInput, Title, ErrorMessage } from "./styles";

interface FormValues {
  enterName: string;
  enterCost: string;
};

export const Form = () => {

  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm<FormValues>({});

  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Expense</Title>
      <StyledInput placeholder="enter name ..." type="text" {...register("enterName", {
        required: true,
        maxLength: { value: 15, message: "Max length of goods name is 15 letters"}
      })}/>
      {errors.enterName && <ErrorMessage>{errors.enterName.message}</ErrorMessage>}

      <StyledInput placeholder="enter cost ..." type="text" {...register("enterCost", {
        required: true,
        maxLength: { value: 5, message: "Max price is 99999"}
      })}/>
      {errors.enterCost && <ErrorMessage>{errors.enterCost.message}</ErrorMessage>}

      <StyledButton type="submit">Done</StyledButton>
    </StyledForm>
  )
}
