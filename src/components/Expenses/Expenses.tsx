import React, { ChangeEvent, useState } from "react"
import { ExpensesList } from "../ExpensesList/ExpensesList"
import { Input } from "../Input/Input"
import { ExpensesContainer } from "./styles";
import { useDebounce } from "../../hooks/useDebounce";
import { useExpensesContext } from "../../context/ExensesContext/ExpensesContext";

export const Expenses = () => {
  const { expenses } = useExpensesContext();
  const [searchExpenses, setExpensesSearch] = useState("");
  const debounceSearch = useDebounce(searchExpenses);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setExpensesSearch(event.target.value.toLowerCase());
  }

  return (
    <ExpensesContainer>
      <h2>Expenses</h2>
      <Input value={searchExpenses} onChange={handleSearch} type="search"/>
      <ExpensesList filterExpences={debounceSearch}/>
    </ExpensesContainer>
  )
}
