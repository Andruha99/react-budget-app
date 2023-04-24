import React from "react";
import { Form } from "./components/Form/Form";
import { Expenses } from "./components/Expenses/Expenses";
import { Wrapper } from "./ui/base";
import { Budget } from "./components/Budget/Budget";

export const App = () => {
  return (
    <Wrapper>
      <h2>Budget App</h2>
      <Budget />
      <Expenses />
      <Form />
    </Wrapper>
  );
};
