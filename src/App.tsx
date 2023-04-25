import React from "react";
import { Form } from "./components/Form/Form";
import { Expenses } from "./components/Expenses/Expenses";
import { Wrapper } from "./ui/base";
import { Budget } from "./components/Budget/Budget";
import Select from "react-select/dist/declarations/src/Select";
import { CustomSelect } from "./components/CustomSelect/CustomSelect";

export const App = () => {
  return (
    <Wrapper>
      <h2>Budget App</h2>
      <CustomSelect />
      <Budget />
      <Expenses />
      <Form />
    </Wrapper>
  );
};
