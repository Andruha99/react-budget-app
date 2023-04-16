import React from "react"
import { Form } from "./components/Form/Form"
import { Expenses } from "./components/Expenses/Expenses"

export const App = () => {
  return (
    <div>
      <Expenses />
      <Form />
    </div>
  )
}
