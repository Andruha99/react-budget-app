import React from "react"
import { Form } from "./components/Form/Form"
import { Expenses } from "./components/Expenses/Expenses"
import { Wrapper } from "./ui/base"

export const App = () => {
  return (
    <Wrapper>
      <Expenses />
      <Form />
    </Wrapper>
  )
}
